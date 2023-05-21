import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { Burger } from '@mantine/core';
import { useContext } from 'react';
import { DrawerContext } from '../../providers/context';
import { useMediaQuery } from '@mantine/hooks';
import { ReactComponent as Favorite } from '../../assets/Favorite.svg';
import { ReactComponent as Search } from '../../assets/Search.svg';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

const Header = () => {
  const matches = useMediaQuery('(max-width: 1024px)');
  const { opened, toggle } = useContext(DrawerContext);

  return (
    <header>
      <div className={styles.container}>
        <h2 className={styles.logo_section}>
          <Logo />
          <span className={styles.logo_text}>Jobored</span>
        </h2>
        <nav>
          <NavLink to={'/'} className={setActive}>
            {matches ? <Search /> : 'Поиск Вакансий'}
          </NavLink>
          <NavLink to={'/favorites'} className={setActive}>
            {matches ? <Favorite /> : 'Избранное'}
          </NavLink>
        </nav>

        <Burger opened={opened} onClick={toggle} className={styles.burger} />
      </div>
    </header>
  );
};

export default Header;
