import React from "react";
import "./Main.css";

export default function Main({handleKeys}) {
  return (
    <main className="Main">
      <button className="main__button" onClick={handleKeys}>Button</button>
    </main>
  );
}