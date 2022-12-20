import "./Header.css";
import headerImg from '../../images/header-img.jpg';

function Header() {
  return (
    <header className="Header">
      <img className="header__bg-img" src={headerImg} alt="Фон из облаков" />
      <h1 className="header__title">Автомобильные</h1>
    </header>
  );
}

export default Header;
