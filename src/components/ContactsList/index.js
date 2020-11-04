import React from "react";
import ContactsListItem from "./ContactListItem";

function ContactsList(props) {
  console.log("here", props.stats);
  return (
    <div>
      <h4>
        Appointment set({props.stats.appointment ? props.stats.appointment : 0})
      </h4>

      <ul className="card-list">
        {props.data.contacts.applicants.map((item) => {
          return <ContactsListItem key={item.id} item={item} />;
        })}
      </ul>
      <h4>Property viewed( {props.stats.viewed ? props.stats.viewed : 0})</h4>

      <ul className="card-list">
        {props.data.contacts.applicants.map((item) => {
          return <ContactsListItem key={item.id} item={item} />;
        })}
      </ul>
      <h4>Interested({props.stats.interested ? props.stats.interested : 0})</h4>

      <h4>
        Offer accepted(
        {props.stats.offerAccepted ? props.stats.offerAccepted : 0})
      </h4>
    </div>
  );
}

export default ContactsList;
