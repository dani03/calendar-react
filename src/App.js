
import { useEffect, useState } from "react";
import "./components/style.css";

import Month from "./components/Month"
import Numero from "./components/Numero";
import Year from "./components/Year";



function App() {
  //state
  const [jours, setJours] = useState([]);
  const [theYearNumber, setTheYearNumber] = useState([]);
  const [mois, setMois] = useState([]);
  //comportements

  // let actualDate = new Date();
  // let actualMonth = actualDate.getMonth();
  var days = [];
  


  const getDaysInMonth = (mois, year) => {
  
    var date = new Date(year, mois, 1);
    while (date.getMonth() === mois) {
      days.push({ 'numero': new Date(date).getDate(), "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });
      date.setDate(date.getDate() + 1);
    }
    setJours(days);

  }
  useEffect(() => {
    console.log('le mois--', mois)
    getDaysInMonth(mois, theYearNumber)

    // return () => {
      
    // };
  }, [mois, theYearNumber]);

  const onYearHandler = (yearSend) => {
    // console.log('on year method', yearSend);

    setTheYearNumber(yearSend)
  }

  const onMonthHandler  = (newMois) => {
    setMois(newMois)
  }
  return (
    <div className="App">
      <Month onSendMonth={onMonthHandler} />
      <Year onSendYear={onYearHandler} />
      {/* <td><Numero num={element.numero} /></td> */}

      <ul className="weekdays">

        <li>Lundi</li>
        <li>Mardi</li>
        <li>Mercredi</li>
        <li>Jeudi</li>
        <li>Vendredi</li>
        <li>Samedi</li>
        <li>Dimanche</li>
      </ul>

      <ul className="days">
        {jours.map((el, index) => {
        return <Numero key={index} num={el.numero} />}
        )}
      </ul>

    

    </div>
  );
}

export default App;
