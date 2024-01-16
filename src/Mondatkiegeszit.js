import React, { useState } from "react";

export default function MondatKiegeszit(props) {
  const [inputValues, setInputValues] = useState(Array(props.mondatobj.mondat.length).fill(""));

  function kitolt(index, value) {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  }

  function kovetkezo() {
    const felhasznaloValasz = inputValues.join("");

    if (felhasznaloValasz === props.mondatobj.helyes) {
      console.log("Helyes válasz!");
      props.kovetkezo(props.mondatobj.index);
    } else {
      console.log("Helytelen válasz!");
      // Itt kezelheted a helytelen választ, például megjelenítheted a hibaüzenetet
    }
  }

  return (
    <p>
      {props.mondatobj.mondat.split("").map((elem, i) => {
        if (elem === "_") {
          return (
            <input
              className="bevitel"
              key={i}
              id={i}
              value={inputValues[i]}
              onChange={(e) => kitolt(i, e.target.value)}
            />
          );
        } else {
          return <span key={i}>{elem}</span>;
        }
      })}
      <span>({props.mondatobj.alap})</span>
      <span className="elrejt pipa">
        <button className="btn btn-success kovetkezo" onClick={kovetkezo}>
          Következő
        </button>
      </span>
      <span className="elrejt hiba"> X</span>
    </p>
  );
}
