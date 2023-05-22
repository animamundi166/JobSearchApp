import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
