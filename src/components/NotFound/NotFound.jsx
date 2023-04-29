import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImg } from '../../assets/NotFound.svg';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <NotFoundImg className={styles.magnifierImg} />
      <p className={styles.title}>Упс, здесь еще ничего нет!</p>
      <button className={styles.button_text}>Поиск Вакансий</button>
    </div>
  );
};
export default NotFound;
