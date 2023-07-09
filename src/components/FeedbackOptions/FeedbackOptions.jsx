import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onClick, options }) => {
  return (
    <div className={css.BtnContainer}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.btnFeedback}
          name="good"
          onClick={() => onClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
