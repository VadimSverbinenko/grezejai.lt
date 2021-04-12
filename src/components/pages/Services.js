import React from "react";
// import '../../App.css'
import "./Services.css";

export default function Services() {
  let changingImg = window.innerWidth <= 960 ? "mobService" : "services";
  return (
    <div className="price">
      <div className="textFormating">
        <ul>
          <li>Gręžiame nuo 42 mm iki 350 mm skermens angas.</li>
          <li>
            Gręžiant šlapiai gręžimo stovas tvirtinamas ankeriu prie sienos.
            Kitais atvejais atliekame gręžimą gręžtuvu, be stovo, iki 132mm
            skersmens.
          </li>
          <li>
            Užsakymams ne Vilniaus r. skaičiuojame 0,5 EUR už 1 KM į vieną pusę.
          </li>
          <li>Minimali vienos skylės gręžimo kaina 8 Eurai.</li>
          <li>Minimali vieno užsakymo kaina 50 eurų.</li>
        </ul>
      </div>

      <div className={changingImg}>
        <div> &nbsp;</div>
      </div>
    </div>
  );
}

{
  /* <div>
Gręžiant šlapiai gręžimo stovas tvirtinamas ankeriu prie sienos. Kitais atvejais atliekame gręžimą rankiniu gręžtuvu, be stovo, iki 132mm skersmens.
</div>
 <div>
 Užsakymams ne Vilniaus rajone taikome 0,5 EUR mokestį už 1 KM į vieną pusę.
</div>
<div>
Minimali vienos skylės gręžimo kaina 8 Eurai.
</div>

<div>
Minimali vieno užsakymo kaina 50 eurų.
</div> */
}
