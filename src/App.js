
import { useEffect, useState } from "react";
import "./components/style.css";

import Month from "./components/Month"
import Numero from "./components/Numero";
import Year from "./components/Year";
import Box from "./components/Box";




function App() {
  //state
  const [jours, setJours] = useState([]);
  const [theYearNumber, setTheYearNumber] = useState([]);
  const [mois, setMois] = useState([]);
  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  //comportements





  // const getDaysInMonth = (mois, year) => {

  //   const date = new Date(year, mois, 1);
  //   while (date.getMonth() === mois) {
  //     Object.entries(days).forEach(
  //       ([key, value]) => {
  //         console.log("cle", key, "valeur", value);
  //         if (key === date.toLocaleString("fr-FR", { "weekday": "long" })) {
  //           days[key].push({ 'numero': new Date(date).getDate(), "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });
  //         } else {
  //           days[key].push({ 'numero': "  ", "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });

  //         }
  //       }
  //     );
  //     // days.push({ 'numero': new Date(date).getDate(), "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });
  //     date.setDate(date.getDate() + 1);
  //   }

  //   const daysArr = transformToArray(days);
  //   setJours(daysArr);

  // }
  // const transformToArray = (obj) => {
  //   return Object.entries(obj)
  // }
  useEffect(() => {

    // getDaysInMonth(mois, theYearNumber)
    const date_firstDay = new Date(theYearNumber, mois, 1).toLocaleString("fr-FR", { "weekday": "long" });
    const date_last = new Date(theYearNumber, mois + 1, 0).toLocaleString("fr-FR", { "weekday": "long" });
    const numberOfDays = new Date(theYearNumber, mois + 1, 0).getDate();
   

    let tabDays = [];
    const tabFirst = new Array(days.indexOf(date_firstDay)).fill('');

    const tabLast = new Array(7 - (days.indexOf(date_last) + 1)).fill('');

    for (let i = 1; i <= numberOfDays; i++) {
      tabDays.push(i);
    }
    tabDays = [...tabFirst, ...tabDays, ...tabLast];
    console.log(tabDays.length, tabDays)
    setJours(tabDays)

  }, [mois, theYearNumber]);

  return (
    <div className="App">
      <Month onSendMonth={(newMois) => setMois(newMois)} />
      <Year onSendYear={(yearSend) => setTheYearNumber(yearSend)} />
      {/* <td><Numero num={element.numero} /></td> */}

      <ul className="weekdays">
        {days.map((el, index) => <li key={index}>{el}</li>)}

      </ul>

      <ul className="days">

        {jours.map((el, index) => <Numero key={index} num={el} />)}

      </ul>

    </div>
  );
}

export default App;
