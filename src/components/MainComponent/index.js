import React from "react";
import Header from "../Header/index";
import Dashboard from "../Dashboard/index";

function MainComponent(props) {
  const getSearchQuery = (query) => {
    props.history.push({
      pathname: "/",
      search: query ? `?search=${query}` : "",
    });
  };
  console.log(props.location.search);

  return (
    <>
      <Header {...props} />
      <Dashboard
        {...props}
        setSearchQuery={getSearchQuery}
        filteredValue={props.location.search}
      />
      <ul>
        <li>AGB - </li>
        <li> Datenschutz - </li>
        <li> Impressum</li>
      </ul>
    </>
  );
}

export default MainComponent;
