import React from "react";
import "./index.css";

function InfoList(props) {
  return (
    <div className="wrapper">
      <div className="info-panel">
        <div className="item">
          <h4>{props.total}</h4>
          <p>Total</p>
        </div>
        <div className="item">
          <h4>{props.stats.new}</h4>
          <p>New</p>
        </div>
        <div className="item">
          <h4>{props.stats.viewed}</h4>
          <p>Viewed</p>
        </div>
        <div className="item">
          <h4>{props.stats.appointment}</h4>
          <p>Appointment</p>
        </div>
        <div className="item">
          {/* <h4>{props.stats.others}</h4> */}
          <h4>x</h4>
          <p>Others</p>
        </div>
      </div>
    </div>
  );
}

export default InfoList;
