import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Layout.module.scss';
import { useEffect } from 'react';
import { getToken } from '../../services/getToken';

const Layout = () => {
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token || token.ttl * 1000 < Date.now()) {
      getToken();
    }
  }, []);

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
