import React from "react";

import "./Options.css";

const Options = props => {
  const options=[
    {
      text:"Placement",
      handler: props.actionProvider.placement,
      id:1

    },
    {
      text: "Infrastructure",
      handler: props.actionProvider.infra,
      id: 2
},
    {
      text: "Ranking",
      handler: props.actionProvider.rank,
      id: 4
    },
    {
      text: "Admission",
      handler: props.actionProvider.admission,
      id: 5
    }, {
      text: "Branches",
      handler: props.actionProvider.course,
      id: 6
    }

  ]
  return (
    <div className="options">
      <h1 className="options-header">{props.title}</h1>
      <div className="options-container">
        {options.map(option => {
          return (
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              {option.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
