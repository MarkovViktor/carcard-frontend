import React from "react";
import aboutImg from '../../images/about-img.jpg';
import "./About.css";

export default function About() {
  return (
    <section className="About" id="about">
      <h2>Как мы это делаем?</h2>
      <p className="about__text">
        Изготавливаем индивидуальные автовизитки с помощью 3D принтера.<br /> 
        Специальная фотополимерная смола быстро высыхает и не имеет неприятного запаха.<br />
      </p>
      <img className="about__img" src={aboutImg} alt="Пример автовизитки" />
    </section>
  );
}