import "./Header.css";
import headerImg from '../../images/header-img.jpg';

function Header() {
  return (
    <header className="Header">
      <img className="header__bg-img" src={headerImg} alt="Фон из облаков" />
      <div className="header__banner">  
        <div>
          <h1 className="header__title">АВТОМОБИЛЬНАЯ ВИЗИТКА </h1>
          <a href="" className="header__banner_button">Изготовить</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
