import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import style from "./Statistics.module.css";


export default function FeedbackStat({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            {total ? (
                <ul className={style.list}>
                    <li className={style.item}>Good: {good}</li>
                    <li className={style.item}>Neutral: {neutral}</li>
                    <li className={style.item}>Bad: {bad}</li>
                    <li className={style.item}>Total: {total}</li>
                    <li className={style.item}>Positive feedback: {positivePercentage}%</li>
                </ul>
            ) : (
                <Notification message="No feedback given" />
            )}
        </>
    )
};

FeedbackStat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};