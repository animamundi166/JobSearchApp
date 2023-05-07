import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Template.module.scss';

const Template = () => (
  <>
    <Header />
    <main className={styles.container}>
      <Outlet />
    </main>
  </>
);

export default Template;
