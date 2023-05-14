import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImg } from '../../assets/NotFound.svg';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <NotFoundImg className={styles.magnifierImg} />
      <p className={styles.title}>Упс, здесь еще ничего нет!</p>
      {/* <Link to={'/'}> */}
      <button className={styles.button_text} onClick={() => <Main />}>
        Поиск Вакансий
      </button>
      {/* </Link> */}
    </div>
  );
};
export default NotFound;
