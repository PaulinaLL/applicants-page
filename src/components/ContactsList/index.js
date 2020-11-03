import React from "react";
import ContactsListItem from "./ContactListItem";

function ContactsList(props) {
  console.log("here", props.stats);
  return (
    <div>
      <h4>Appointment set({props.stats.appointment})</h4>

      <ul className="card-list">
        {props.data.contacts.applicants.map((item) => {
          return <ContactsListItem key={item.id} item={item} />;
        })}
      </ul>
      <h4>Property viewed({props.stats.viewed})</h4>

      <ul className="card-list">
        {props.data.contacts.applicants.map((item) => {
          return <ContactsListItem key={item.id} item={item} />;
        })}
      </ul>
      <h4>Interested({props.stats.viewed})</h4>
      <h4>Offer accepted({props.stats.offerAccepted})</h4>
    </div>
  );
}

export default ContactsList;
