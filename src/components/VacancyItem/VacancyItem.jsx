import styles from './VacancyItem.module.scss';
import { ReactComponent as Favorite } from '../../assets/Favorite.svg';
import { ReactComponent as Location } from '../../assets/Location.svg';
import { formatSalary } from '../../utils/formatSalary';
import { useState } from 'react';
import clsx from 'clsx';

const VacancyItem = ({
  vacancy_id,
  profession,
  town,
  type_of_work,
  payment_from,
  payment_to,
  currency,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeLocalStorage = key => {
    localStorage.removeItem(key);
  };

  const handleClick = (isFavorited, id) => {
    if (!isFavorited) {
      setIsFavorited(true);
      console.log(isFavorited);
      setLocalStorage(id, id);
    } else {
      setIsFavorited(false);
      removeLocalStorage(id);
      console.log(isFavorited);
    }
  };

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.profession}>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>
            {profession}
          </a>
        </p>

        <p className={styles.salary_and_type}>
          <span className={styles.salary}>
            з/п {formatSalary(payment_from, payment_to, currency)}
          </span>
          <span className={styles.dot}>•</span>
          <span className={styles.type_of_work}>{type_of_work}</span>
        </p>

        <p className={styles.location}>
          <Location />
          <span className={styles.town}>{town}</span>
        </p>
      </div>

      <div>
        <Favorite
          className={clsx(styles.star, isFavorited && styles.star_filled)}
          onClick={() => handleClick(isFavorited, vacancy_id)}
        />
      </div>
    </div>
  );
};
export default VacancyItem;
