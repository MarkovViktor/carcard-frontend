import React from "react";
import headerLogo from '../../images/header-logo.jpg';
import whatsappLogo from '../../images/whatsapp.svg';
import telegramLogo from '../../images/telegram.svg';
import "./Order.css";

export default function Order() {
  return (
    <section className="Order" id="order">
      <div className="order__container">
        <img className="order__logo_img" src={headerLogo} alt="Логотип" />
        <p className="order__text">
          Изготовим и отправим вам автовизитку в течении 1-2 дней.<br />
          По вашему желанию можем сделать разные углы наклона, толщину цифр и площадки.<br /> 
          Логотип телефонной трубки перед номером так-же может быть изменен по вашему желанию.<br />
        </p>
      </div>
      <p className="order__price">Цена 700 рублей + цена доставки любой компанией</p>
      <div className="order__contact">
        <h2 className="order__contact_networck">
          С нами можно связаться:
        </h2>
        <a className="order__contact_number" title="Whatsapp" target="blank" href="https://wa.me/79991251255">
          <img className="order__contact_logo" src={whatsappLogo} alt="Написать в Whatsapp" />
          <p className="order__contact_phone">+7 999 125 1255</p>
        </a>
        <a className="order__contact_number" title="Telegram" href="https://telegram.me/viktor460851945" 
          target="_blank" rel="noreferrer">
          <img className="order__contact_logo" src={telegramLogo} alt="Написать в Telegram" />
          <p className="order__contact_phone">+7 999 125 1255</p>
        </a>
        <p>
          Для заказа и уточнения деталей звоните по телефону или пишите в WhatsApp или Telegram
        </p>
      </div>

    </section>
  );
}