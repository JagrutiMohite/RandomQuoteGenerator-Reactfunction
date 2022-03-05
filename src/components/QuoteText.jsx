import React from "react";

export default function QuoteText(props) {
  return (
    <>
      <div className="text" style={{ color: props.colorChange }}>
        &#8220; {props.name} &#8221;
      </div>
      <div className="textAuth" style={{ color: props.colorChange }}>
        - {props.author}
      </div>
    </>
  );
}
