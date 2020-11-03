import React from "react";
import "./index.css";
import SearchAndFilter from "../SearchAndFilter/index";
import InfoList from "../InfoList/index";
import ContactList from "../ContactsList/index";

function Dashboard(props) {
  const total = props.contacts.applicants.length;
  const arrayOfContactsInObject = props.contacts.applicants;

  const groupInfo = arrayOfContactsInObject.reduce((groups, person) => {
    const { viewed = 0, appointment = 0, newCategory = 0, others = 0 } = groups;
    if (person.viewed !== "") {
      return { ...groups, viewed: viewed + 1 };
    } else if (person.appointment !== "") {
      return { ...groups, appointment: appointment + 1 };
    } else if (person.interested === "" && person.appointment === "") {
      return { ...groups, others: others + 1 };
    } else {
      return { ...groups, new: newCategory + 1 };
    }
  }, {});

  console.log(groupInfo);

  return (
    <div className="wrapper">
      <div className="info-section">
        <h3>Applicants</h3>
        <div className="info-wrapper">
          <InfoList stats={groupInfo} total={total} />
        </div>
      </div>
      <SearchAndFilter />
      <ContactList stats={groupInfo} data={props} />
    </div>
  );
}

export default Dashboard;
