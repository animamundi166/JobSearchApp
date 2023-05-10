import styles from './VacancyItem.module.scss';
import { ReactComponent as Location } from '../../assets/Location.svg';
import { formatSalary } from '../../utils/formatSalary';
import { Link } from 'react-router-dom';
import StarButton from '../Buttons/StarButton/StarButton';

const VacancyItem = ({ vacancy }) => {
  return (
    <div className={styles.card}>
      <div className={styles.profession_star}>
        <p className={styles.profession}>
          <Link
            to={`/vacancy/${vacancy.id}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {vacancy.profession}
          </Link>
        </p>
        <div className={styles.star_container}>
          <StarButton vacancy={vacancy} />
        </div>
      </div>

      <p className={styles.salary_and_type}>
        <span className={styles.salary}>
          з/п{' '}
          {formatSalary(
            vacancy.minPayment,
            vacancy.maxPayment,
            vacancy.currency
          )}
        </span>
        <span className={styles.dot}>•</span>
        <span className={styles.type_of_work}>{vacancy.worktime}</span>
      </p>

      <p className={styles.location}>
        <Location />
        <span className={styles.town}>{vacancy.town}</span>
      </p>
    </div>
  );
};
export default VacancyItem;
