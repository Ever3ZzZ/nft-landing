import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop"; // Импортируем компонент
import Home from "./Home";
import Free from "./Free";
import Clients from "./Clients";
import Release from "./Release";
import Like from "./Like";
import Signup from "./Signup";
import Footer from "./Footer";
import SuperRare from "./SuperRare";
import "./scss/index.scss";
import ScrollReveal from "scrollreveal";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);  // Переключаем data-theme
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 2000,
        reset: false,
      });

      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
      `,
        { interval: 500 }
      );
    };

    registerAnimations();
  }, []);

  return (
    <div className={`app-container`}>
      <Navbar changeTheme={changeTheme} currentTheme={currentTheme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />

      {/* <Home /> */}
      {/* <Free /> */}
      {/* <Clients /> */}
      {/* <SuperRare /> */}
      {/* <Release /> */}
      {/* } <Like /> */}
      {/* <Signup /> */} 
      {/* <Footer /> */}
      <ScrollToTop /> {/* Добавляем компонент кнопки */}
    </div>
  );
}
