import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <div className={css.BtnContainer}>
      <button
        type="button"
        className={css.btnFeedback}
        name="good"
        onClick={onClick}
      >
        Good
      </button>
      <button
        type="button"
        className={css.btnFeedback}
        name="neutral"
        onClick={onClick}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.btnFeedback}
        name="bad"
        onClick={onClick}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
