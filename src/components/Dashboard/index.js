import React from "react";
import "./index.css";
import { withRouter } from "react-router-dom";
import SearchAndFilter from "../SearchAndFilter/index";
import InfoList from "../InfoList/index";
import ContactList from "../ContactsList/index";
import arrow from "../../assets/back.svg";
import queryString from "query-string";

function Dashboard(props) {
  const total = props.contacts.applicants.length;
  const arrayOfContactsInObject = props.contacts.applicants;
  const parsed = queryString.parse(props.location.search);
  const searchWord = parsed.search;

  // group info to display stats
  const groupInfo = arrayOfContactsInObject.reduce((groups, person) => {
    const {
      viewed = 0,
      appointment = 0,
      interested = 0,
      offerAccepted = 0,
      others = 0,
    } = groups;
    if (person.interested !== "") {
      return { ...groups, interested: interested + 1 };
    } else if (person.offerAccepted !== "") {
      return { ...groups, offerAccepted: offerAccepted + 1 };
    } else if (person.viewed !== "") {
      return { ...groups, viewed: viewed + 1 };
    } else if (person.appointment !== "") {
      return { ...groups, appointment: appointment + 1 };
    } else {
      return { ...groups, others: others + 1 };
    }
  }, {});

  const updateSearch = (searchString) => {
    props.history.push(`/?search=${searchString}`);
  };

  // if !searchWord whole arrayOfContactsInObject will be passed down, else just the search result object

  let result;
  function filterCandidate() {
    if (searchWord) {
      result = arrayOfContactsInObject.filter(
        (candidate) =>
          candidate.firstName
            .toLowerCase()
            .includes(searchWord.toLowerCase()) ||
          candidate.lastName.toLowerCase().includes(searchWord.toLowerCase()) ||
          candidate.email.toLowerCase().includes(searchWord.toLowerCase())
      );
    } else {
      result = arrayOfContactsInObject;
    }
    return result;
  }

  return (
    <div className="wrapper">
      <div className="info-section">
        <img alt="arrow-left" src={arrow}></img>
        <h3>Applicants</h3>
        <div className="info-wrapper">
          <InfoList stats={groupInfo} total={total} />
        </div>
      </div>
      <SearchAndFilter handleChange={(e) => updateSearch(e.target.value)} />
      <ContactList stats={groupInfo} data={filterCandidate()} />
    </div>
  );
}
export default withRouter(Dashboard);
