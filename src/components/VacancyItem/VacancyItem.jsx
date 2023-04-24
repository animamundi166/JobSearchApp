import styles from './VacancyItem.module.scss';
import Location from '../../assets/Location.svg';
import Favorite from '../../assets/Favorite.svg';

const VacancyItem = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
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
          <img className={styles.location_icon} src={Location} alt='Location' />
          <span className={styles.town}>Новый Уренгой</span>
        </p>
      </div>

      <div className={styles.right}>
        <img className={styles.favorite_icon} src={Favorite} alt='Favorite' />
      </div>
    </div>
  );
};
export default VacancyItem;
