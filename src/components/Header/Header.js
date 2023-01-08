import "./Header.css";
import headerImg from '../../images/header-img.jpg';
import bannerImg from '../../images/banner-img.png';

function Header() {
  return (
    <header className="Header">
      <img className="header__bg-img" src={headerImg} alt="Фон сайта" />
      <div className="header__banner">
        <img className="header__banner_img" src={bannerImg} alt="Автовизитка" />  
        <div className="header__banner_buy">
          <h1 className="header__title">Автовизитка </h1>
          <a href="#about" className="header__banner_button">Изготовить</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
