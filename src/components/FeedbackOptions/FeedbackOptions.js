import React from 'react';
import PropTypes from "prop-types";
import FeedbackBtn from '../FeedbackBtn/FeedbackBtn';
import style from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
        <ul className={style.list}>
        {options.map(option => (
            <FeedbackBtn key={option} option={option}
                onLeaveFeedback={onLeaveFeedback} />
        ))}
        </ul>
    )
    
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};