import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImg } from '../../assets/NotFound.svg';
import { initialParams, params } from '../../constants';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  Object.assign(params, initialParams);

  return (
    <div className={styles.container}>
      <NotFoundImg className={styles.magnifierImg} />
      <p className={styles.title}>Упс, здесь еще ничего нет!</p>
      <button className={styles.button_text} onClick={() => navigate('/')}>
        Поиск Вакансий
      </button>
    </div>
  );
};
export default NotFound;
