import React from "react";
import Header from "../Header/index";
import Dashboard from "../Dashboard/index";

function MainComponent(props) {
  return (
    <>
      <Header {...props} />
      <Dashboard {...props} />
      <ul>
        <li>AGB - </li>
        <li> Datenschutz - </li>
        <li> Impressum</li>
      </ul>
    </>
  );
}

export default MainComponent;
