import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import CheckButton from "../Button/CheckButton";

const Header = () => {
  const openInviteForm = () => {
    const displayBack = document.querySelector(".invite__background");
    const displayButton = document.querySelector(".close__btn");
    displayBack.style.display = "flex";
    displayButton.style.display = "inline-block";
  };

  const closeMenu = () => {
    document.querySelector(".menu__checkbox").checked = false;
  };
  return (
    <header className="header">
      <CheckButton
        classButton="menu__btn"
        classIcon="menu__icon"
        classCheck="menu__checkbox"
        idToggle="nav-toggle"
      />
      <nav className="mobile__nav header__nav">
        <Link onClick={closeMenu} to="/home">
          <img src={logo} alt="Logo" className="mobile__logo header__logo" />
        </Link>
        <div className="mobile__list header__list">
          <div className="mobile__links header__links">
            <Link
              onClick={closeMenu}
              to="/stories"
              className="mobile__link mobile__link--1 header__link"
            >
              <h4 className="header-4">Stories</h4>
            </Link>
            <Link
              onClick={closeMenu}
              to="/features"
              className="mobile__link mobile__link--2 header__link"
            >
              <h4 className="header-4">Features</h4>
            </Link>
            <Link
              onClick={closeMenu}
              to="/pricing"
              className="mobile__link mobile__link--3 header__link"
            >
              <h4 className="header-4">Pricing</h4>
            </Link>
          </div>

          <button
            onClick={openInviteForm}
            className="mobile__link btn__dark mobile__btn header__btn text-body"
          >
            Get an invite
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;

