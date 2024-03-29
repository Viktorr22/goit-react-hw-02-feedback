import PropTypes from 'prop-types';
import { Notification } from 'components';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h3>Statistics</h3>
      {!total ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
