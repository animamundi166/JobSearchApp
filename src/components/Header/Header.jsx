import style from './Header.module.scss';
import ReactLogo from '../../assets/Logo.svg';

const Header = () => {
  return (
    <header className={style.main}>
      <div className={style.logo}>
        <img src={ReactLogo} alt='React Logo' />{' '}
      </div>
      <span>Jobored</span>
    </header>
  );
};

export default Header;
