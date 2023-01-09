import React from "react";
import headerLogo from '../../images/header-logo.jpg';
import "./Order.css";

export default function Order() {
  return (
    <section className="Order" id="order">
      <div className="order__container">
        <img className="order__logo_img" src={headerLogo} alt="Логотип" />
        <p className="order__text">
          По вашему желанию можем сделать разные углы наклона, толщину цифр и площадки.<br /> 
          Логотип телефонной трубки перед номером так-же может быть изменен по вашему желанию.<br />
        </p>
      </div>

    </section>
  );
}