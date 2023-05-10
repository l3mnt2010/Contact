import React from "react";

interface History {
  Timedate: string;
  Phone: string;
  connect: string;
}

const CallHistory: React.FC<History> = (props) => {
  const { Timedate, Phone, connect } = props;
  return (
    <div className="w-full mx-auto grid grid-cols-2">
      <div className="block">
        <div>{Timedate}</div>
        <a href={`tel:${Phone}`}>{Phone}</a>
      </div>
      <div className="text-center">{connect}</div>
    </div>
  );
};

export default CallHistory;
