import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statisticsContainer}>
      <h2 className={styles.title}>Statistics</h2>
      <ul className={styles.statistics}>
        <li className={styles.statistic}>
          Good: <span className={styles.result}>{good}</span>
        </li>
        <li className={styles.statistic}>
          Neutral: <span className={styles.result}>{neutral}</span>
        </li>
        <li className={styles.statistic}>
          Bad: <span className={styles.result}>{bad}</span>
        </li>
        <li className={styles.statistic}>
          Total: <span className={styles.result}>{total}</span>
        </li>
        <li className={styles.statistic}>
          Positive feedback:{' '}
          <span className={styles.result}>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
