import styles from './VacancyItem.module.scss';
import { ReactComponent as Favorite } from '../../assets/Favorite.svg';
import { ReactComponent as Location } from '../../assets/Location.svg';
import { formatSalary } from '../../utils/formatSalary';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useIsFavorited } from '../../hooks/useIsFavoried';

const VacancyItem = ({ vacancy }) => {
  const [isFavorited, toggleFavorited] = useIsFavorited(vacancy);

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.profession}>
          <Link
            to={`/vacancy/${vacancy.id}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {vacancy.profession}
          </Link>
        </p>

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

      <div className={styles.star_container}>
        <Favorite
          className={clsx(styles.star, isFavorited && styles.star_filled)}
          onClick={toggleFavorited}
        />
      </div>
    </div>
  );
};
export default VacancyItem;
