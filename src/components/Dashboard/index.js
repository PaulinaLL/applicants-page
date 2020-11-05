import React, { useState } from "react";
import "./index.css";
import { withRouter } from "react-router-dom";
import SearchAndFilter from "../SearchAndFilter/index";
import InfoList from "../InfoList/index";
import ContactList from "../ContactsList/index";
import arrow from "../../assets/back.svg";

function Dashboard(props) {
  const [searchField, setSearchFieldState] = useState("");
  const total = props.contacts.applicants.length;
  const arrayOfContactsInObject = props.contacts.applicants;
  const groupInfo = arrayOfContactsInObject.reduce((groups, person) => {
    const {
      viewed = 0,
      appointment = 0,
      newCategory = 0,
      offerAccepted = 0,
      others = 0,
    } = groups;
    if (person.offerAccepted !== "") {
      return { ...groups, offerAccepted: offerAccepted + 1 };
    } else if (person.viewed !== "") {
      return { ...groups, viewed: viewed + 1 };
    } else if (person.appointment !== "") {
      return { ...groups, appointment: appointment + 1 };
    } else if (person.interested !== "" && person.appointment === "") {
      return { ...groups, newCategory: newCategory + 1 };
    } else {
      return { ...groups, others: others + 1 };
    }
  }, {});

  const updateSearch = (searchString) => {
    setSearchFieldState(searchString);
    props.history.push(`/?search=${searchString}`);
  };

  const filteredCandidates = arrayOfContactsInObject.filter(
    (candidate) =>
      candidate.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
      candidate.lastName.toLowerCase().includes(searchField.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="info-section">
        <img alt="arrow-left" src={arrow} height="16px"></img>
        <h3>Applicants</h3>
        <div className="info-wrapper">
          <InfoList stats={groupInfo} total={total} />
        </div>
      </div>
      <SearchAndFilter handleChange={(e) => updateSearch(e.target.value)} />
      <ContactList stats={groupInfo} data={filteredCandidates} />
    </div>
  );
}
export default withRouter(Dashboard);
