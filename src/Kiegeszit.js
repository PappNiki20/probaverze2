import React, { useState } from "react";
import MondatokModel from "./model/MondatokModel";
import MondatKiegeszit from "./Mondatkiegeszit";

export default function Kiegeszit() {
  const mondatokModel = new MondatokModel();
  const [cim, setCim] = useState(mondatokModel.cim);
  const [sugoSzoveg, setSugoSzoveg] = useState(mondatokModel.sugoSzoveg);
  const [mondat, setMondat] = useState(() => mondatokModel.aktMondatOsszeallit(2));

  function kovetkezo() {
    let i = mondatokModel.kovElem(mondat.index);
    setMondat(mondatokModel.aktMondatOsszeallit(i));
  }

  function sugoMondat() {
    console.log(sugoSzoveg);
    return (
      <p>
        {sugoSzoveg}
      </p>
    );
  }

  return (
    <article className="tartalom">
      <h3>
        {cim}
        <button className="sugo-btn btn btn-succes" onClick={sugoMondat}>
          ?
        </button>
      </h3>
      <h4>Írd be a helyes választ</h4>
      <MondatKiegeszit mondatobj={mondat} kovetkezo={kovetkezo} />
    </article>
  );
}
