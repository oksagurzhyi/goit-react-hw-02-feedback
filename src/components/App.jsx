import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtnFeedback = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: (prevState[option] += 1),
    }));
  };

  countTotalFeedback = state => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good }) => {
    return ((good / this.countTotalFeedback(this.state)) * 100).toFixed(1);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const arrayOfKeys = Object.keys(this.state);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClick={this.onClickBtnFeedback}
            options={arrayOfKeys}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
