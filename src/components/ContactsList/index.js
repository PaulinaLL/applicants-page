import React from "react";
import ContactsListItem from "./ContactListItem";

function ContactsList(props) {
  // const candidates = props.data.contacts.applicants;
  const candidates = props.data;

  let appointmentResult = candidates.filter(
    (candidate) => candidate.appointment !== "" && candidate.viewed === ""
  );

  let viewedResult = candidates.filter((candidate) => candidate.viewed !== "");

  let interestedResult = candidates.filter(
    (candidate) => candidate.interested !== "" && candidate.appointment === ""
  );

  let offerAcceptedResult = candidates.filter(
    (candidate) => candidate.offerAccepted !== ""
  );

  return (
    <div>
      <h4>
        Appointment set ({props.stats.appointment ? props.stats.appointment : 0}
        )
      </h4>
      <ul className="card-list">
        {appointmentResult.map((item) => {
          return <ContactsListItem key={item.id} item={item} />;
        })}
      </ul>
      <h4>Property viewed ({props.stats.viewed ? props.stats.viewed : 0})</h4>

      <ul className="card-list">
        {viewedResult.map((item) => {
          return <ContactsListItem key={item.id} item={item} />;
        })}
      </ul>
      <h4>
        Interested ({props.stats.interested ? props.stats.interested : 0})
      </h4>
      {interestedResult.map((item) => {
        return <ContactsListItem key={item.id} item={item} />;
      })}
      <h4>
        Offer accepted (
        {props.stats.offerAccepted ? props.stats.offerAccepted : 0})
      </h4>
      {offerAcceptedResult.map((item) => {
        return <ContactsListItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ContactsList;
