import React from "react";
import aboutImg from '../../images/about-img.jpg';
import "./About.css";

export default function About() {
  return (
    <section className="About" id="about">
      <h2>Изготовление парковочной автовизитки</h2>
      <p>ааааааааааааааа аааааааааааа ааааааааааааа ааааааааааааа
        ааааааааааа ааааааааааааа аааааааааааааа аааааааааааааа
        аааааааааааааа ааааааааааааа ааааааааааа ааааааааааааа 
        ааааааааааааа ааааааааааааааа аааааааааааааа ааааааааааа
        аааааааааааааааа ааааааааааааааа аааааааааааа ааааааааааа
        ааааааааааааааа аааааааааааааааааа ааааааааааааааааааааа
        ааааааааааааааааааааа аааааааааааа аааааааааа аааааааааа
      </p>
      <img className="about__img" src={aboutImg} alt="Пример автовизитки" />
    </section>
  );
}