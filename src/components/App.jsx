import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtnFeedback = event => {
    console.log(this.state);

    const feedback = event.currentTarget.name;
    this.setState(prevState => ({
      ...prevState,
      [feedback]: (prevState[feedback] += 1),
    }));
    // console.log(this.state[feedback]);
  };

  render() {
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
          <FeedbackOptions onClick={this.onClickBtnFeedback} />
          <Statistics state={this.state} title="Statistics" />
        </Section>
      </div>
    );
  }
}
