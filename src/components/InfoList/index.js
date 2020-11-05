import React from "react";
import "./index.css";

function InfoList(props) {
  return (
    <div className="wrapper-panel">
      <div className="info-panel">
        <div className="item">
          <h4> {props.total ? props.total : 0}</h4>
          <p>Total</p>
        </div>
        <div className="item">
          <h4> {props.stats.interested ? props.stats.interested : 0}</h4>
          <p>New</p>
        </div>
        <div className="item">
          <h4> {props.stats.viewed ? props.stats.viewed : 0}</h4>
          <p>Viewed</p>
        </div>
        <div className="item">
          <h4>{props.stats.appointment ? props.stats.appointment : 0}</h4>
          <p>Appointment</p>
        </div>
        <div className="item">
          <h4>
            {props.stats.others && props.stats.offerAccepted
              ? props.stats.others + props.stats.offerAccepted
              : 0}
          </h4>
          <p>Others</p>
        </div>
      </div>
    </div>
  );
}

export default InfoList;
