import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImg } from '../../assets/NotFound.svg';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ParamsContext } from '../../providers/Params/context';
import { params } from '../../constants';

const NotFound = () => {
  const navigate = useNavigate();
  const { resetParams } = useContext(ParamsContext);

  useEffect(() => {
    resetParams();
    delete params.keyword;
  }, [resetParams]);

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
