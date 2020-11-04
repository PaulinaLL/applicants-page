import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import contactSupport from "../../assets/Contact_Support.png";
import contactSupportIcon from "../../assets/ic-contact_support.png";
import burgerMenu from "../../assets/ic-menu_link.png";
import icPower from "../../assets/ic-power_settings_new.png";
import icUser from "../../assets/ic-user.png";
import activeMessage from "../../assets/active.png";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <img alt="burgerMenu" src={burgerMenu}></img>
        <img alt="McMaklerLogo" src={logo}></img>
      </div>
      <div className="icons-wrapper">
        <img alt="contactSupportLogo" src={contactSupportIcon}></img>
        <img alt="contactSupportText" src={contactSupport}></img>

        <img alt="activeMessage" src={activeMessage}></img>
        <img alt="icUser" src={icUser}></img>
        <img alt="icPower" src={icPower}></img>
      </div>
    </div>
  );
}

export default Header;
