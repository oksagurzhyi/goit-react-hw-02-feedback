import React from 'react';

import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.textStatistics}> Good: {good}</p>
      <p className={css.textStatistics}> Neutral: {neutral}</p>
      <p className={css.textStatistics}> Bad: {bad}</p>
      <p className={css.textStatistics}>Total: {total} </p>
      <p className={css.textStatistics}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
