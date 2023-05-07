import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

const Header = () => {
  return (
    <>
      <header>
        <h2 className={styles.logo_section}>
          <Logo />
          <span className={styles.logo_text}>Jobored</span>
        </h2>
        <nav>
          <NavLink to={'/'} className={setActive}>
            Поиск Вакансий
          </NavLink>
          <NavLink to={'/favorites'} className={setActive}>
            Избранное
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
