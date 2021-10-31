import PropTypes from "prop-types";

export default function Notification({ message }) {return (<p>{message}</p>) };

Notification.defaultProps = { message: "" };

Notification.propTypes = {
  message: PropTypes.string,
};