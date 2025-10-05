import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../public/logo.png";

const AnimatedLinks = ({ changeTheme, currentTheme }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <div className="links-container">
      <ul className="links">
        <li>
          <a href="#" onClick={handleClick} className={clicked ? "active" : ""}>
            Features
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick} className={clicked ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick} className={clicked ? "active" : ""}>
            Launch
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick} className={clicked ? "active" : ""}>
            Sign up
          </a>
        </li>
        <li onClick={changeTheme}>
          {currentTheme === "dark" ? <ImSun /> : <BsFillMoonFill />}
        </li>
      </ul>
    </div>
  );
};

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);

  return (
    <nav className={currentTheme === "dark" ? "dark" : "light"}> {/* Добавляем динамичные классы для фона */}
      <div className="brand-container">
        <div className="brand">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="nft_logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle" onClick={() => setNavState(!navState)}>
            <GiHamburgerMenu />
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? <ImSun /> : <BsFillMoonFill />}
          </div>
        </div>
      </div>
      <AnimatedLinks changeTheme={changeTheme} currentTheme={currentTheme} />
    </nav>
  );
}
