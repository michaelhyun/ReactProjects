import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content"> {props.children} </div>
      <div className="Extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <dive className="ui basic red button">Decline</dive>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
