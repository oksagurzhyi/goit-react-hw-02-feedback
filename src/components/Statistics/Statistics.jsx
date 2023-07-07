import React from 'react';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({ state, title }) => {
  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = ((state.good / totalFeedback) * 100).toFixed(1);
  return (
    <>
      <h1 className={css.statTitle}>{title}</h1>

      {totalFeedback > 0 ? (
        <div>
          <p className={css.textStatistics}> Good: {state.good}</p>
          <p className={css.textStatistics}> Neutral: {state.neutral}</p>
          <p className={css.textStatistics}> Bad: {state.bad}</p>
          <p className={css.textStatistics}>Total: {totalFeedback} </p>
          <p className={css.textStatistics}>
            Positive feedback: {positiveFeedback}%
          </p>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
