import React, { useState, useEffect } from "react";
import "./index.css";
import queryString from "query-string";
import SearchAndFilter from "../SearchAndFilter/index";
import InfoList from "../InfoList/index";
import ContactList from "../ContactsList/index";
import arrow from "../../assets/arrow.png";

function Dashboard(props) {
  const [searchField, setSearchFieldState] = useState("");
  const total = props.contacts.applicants.length;
  const arrayOfContactsInObject = props.contacts.applicants;
  const [filteredValue, setFilteredValue] = useState(arrayOfContactsInObject);
  const parsed = queryString.parse(props.location.search);
  console.log(filteredValue);

  useEffect(() => {
    let filteredCandidates;
    console.log(parsed);
    if (parsed.search) {
      filteredCandidates = arrayOfContactsInObject.filter(
        (candidate) =>
          candidate.firstName
            .toLowerCase()
            .includes(parsed.search.toLowerCase()) ||
          candidate.lastName
            .toLowerCase()
            .includes(parsed.search.toLowerCase()) ||
          candidate.email.toLowerCase().includes(parsed.search.toLowerCase())
      );
    } else {
      filteredCandidates = arrayOfContactsInObject;
    }
    setFilteredValue(filteredCandidates);
    props.setSearchQuery(searchField);
  }, [searchField]);

  console.log(filteredValue);
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

  const handleChange = (e) => {
    setSearchFieldState(e.target.value);
  };
  console.log(filteredValue);
  return (
    <div className="wrapper">
      <div className="info-section">
        <img alt="arrow-left" src={arrow} height="16px"></img>
        <h3>Applicants</h3>
        <div className="info-wrapper">
          <InfoList stats={groupInfo} total={total} />
        </div>
      </div>
      <SearchAndFilter
        // handleChange={(e) => setSearchFieldState(e.target.value)}
        handleChange={handleChange}
      />
      <ContactList
        stats={groupInfo}
        // data={filteredCandidates}
        data={filteredValue}
        filteredValue={props.filteredValue}
      />
    </div>
  );
}

export default Dashboard;
