import styles from './VacancyItem.module.scss';
import { ReactComponent as Favorite } from '../../assets/Favorite.svg';
import { ReactComponent as Location } from '../../assets/Location.svg';

const VacancyItem = () => {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.profession}>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>
            Менеджер-дизайнер
          </a>
        </p>

        <p className={styles.salary_and_type}>
          <span className={styles.salary}>з/п от 70000 rub</span>
          <span className={styles.dot}>•</span>
          <span className={styles.type_of_work}>Полный рабочий день</span>
        </p>

        <p className={styles.location}>
          <Location />
          <span className={styles.town}>Новый Уренгой</span>
        </p>
      </div>

      <div>
        <Favorite className={styles.star} />
      </div>
    </div>
  );
};
export default VacancyItem;
