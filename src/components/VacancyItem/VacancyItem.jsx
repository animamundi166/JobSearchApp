import styles from './VacancyItem.module.scss';
import { ReactComponent as Location } from '../../assets/Location.svg';
import { formatSalary } from '../../utils/formatSalary';
import { Link } from 'react-router-dom';
import StarButton from './StarButton/StarButton';

const VacancyItem = ({ vacancy }) => {
  return (
    <div data-elem={`vacancy-${vacancy.id}`} className={styles.card}>
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
        <StarButton
          dataElem={`vacancy-${vacancy.id}-shortlist-button`}
          vacancy={vacancy}
        />
      </div>

      <div className={styles.salary_and_type}>
        <span className={styles.salary}>
          з/п{' '}
          {formatSalary(
            vacancy.agreement,
            vacancy.minPayment,
            vacancy.maxPayment,
            vacancy.currency
          )}
        </span>
        <span className={styles.dot}>•</span>
        <span className={styles.type_of_work}>{vacancy.worktime}</span>
      </div>

      <p className={styles.location}>
        <Location className={styles.location_icon} />
        <span className={styles.town}>{vacancy.town}</span>
      </p>
    </div>
  );
};
export default VacancyItem;
