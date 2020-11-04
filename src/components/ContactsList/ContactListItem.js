import React from "react";
import "./index.css";
import { getInitialLetters, colorGenerator } from "../../helpers";

function ContactsListItem(props) {
  return (
    <li key={props.item.id} className="card">
      <div className="card-avatar">
        <div
          className="deco-circle"
          style={{ backgroundColor: colorGenerator(), opacity: 0.6 }}
        >
          <h5>
            {getInitialLetters(props.item.firstName, props.item.lastName)}
          </h5>
        </div>

        <div className="card-personal-data">
          <h5 className="card-name">
            {props.item.firstName} {props.item.lastName}{" "}
          </h5>
          <p className="card-phone">{props.item.phone}</p>
          <p className="card-email">{props.item.email}</p>

          <p className="card-appointment">
            {props.item.appointment && `APPOINTMENT ${props.item.appointment}`}
          </p>
          <p className="card-viewed">
            {props.item.viewed && `VIEWED ${props.item.viewed}`}
          </p>
          <p className="card-bid">
            {props.item.bid && `BID ${props.item.bid}`}
          </p>
        </div>
      </div>
    </li>
  );
}

export default ContactsListItem;
