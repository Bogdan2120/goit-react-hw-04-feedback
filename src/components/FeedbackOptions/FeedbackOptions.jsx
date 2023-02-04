import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeadback, options }) => {
  return (
    <div className={styles.btnContainer}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={styles.button}
          onClick={() => onLeaveFeadback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeadback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
