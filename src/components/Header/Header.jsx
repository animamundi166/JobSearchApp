import style from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

const Header = () => {
  return (
    <header>
      <div className={style.logo_section}>
        <Logo />
        <span className={style.logo_text}>Jobored</span>
      </div>
      <div className={style.toogle_section}>
        <span className={style.text}>Поиск Вакансий</span>
        <span className={style.text}>Избранное</span>
      </div>
    </header>
  );
};

export default Header;
