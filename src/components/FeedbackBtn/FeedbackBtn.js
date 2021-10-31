import React from 'react';
import PropTypes from "prop-types";
import style from './Feedback.module.css'

export default function FeedbackBtn({ option, onLeaveFeedback }) {

    return (
            <li className={style.butList} key={option}>
                <button
                    className={style.button}
                    type="button"
                    data-value={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                </button>
            </li>
    )
}

FeedbackBtn.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};