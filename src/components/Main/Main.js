import React from "react";
import "./Main.css";

export default function Main({handleKeys}) {
  return (
    <main className="Main">
      <label className="main__label" onClick={handleKeys}>Button</label>
    </main>
  );
}