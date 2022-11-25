
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
  //comportements

  // let actualDate = new Date();
  // let actualMonth = actualDate.getMonth();
  // var days = [];
  var days = {
    'lundi': [],
    'mardi': [],
    'mercredi': [],
    'jeudi': [],
    'vendredi': [],
    'samedi': [],
    'dimanche': [],
  };




  const getDaysInMonth = (mois, year) => {

    var date = new Date(year, mois, 1);
    while (date.getMonth() === mois) {
      Object.entries(days).forEach(
        ([key, value]) => {
          console.log("cle", key, "valeur", value);
          if (key === date.toLocaleString("fr-FR", { "weekday": "long" })) {
            days[key].push({ 'numero': new Date(date).getDate(), "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });
          } else {
            days[key].push({ 'numero':" vide ", "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });

          }
        }
      );
      // days.push({ 'numero': new Date(date).getDate(), "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });
      date.setDate(date.getDate() + 1);
    }

    const daysArr = transformToArray(days);
    setJours(daysArr);

  }
  const transformToArray = (obj) => {
    return Object.entries(obj)
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

  const onMonthHandler = (newMois) => {
    setMois(newMois)
  }
  return (
    <div className="App">
      <Month onSendMonth={onMonthHandler} />
      <Year onSendYear={onYearHandler} />
      {/* <td><Numero num={element.numero} /></td> */}

      <ul className="weekdays">
        {jours.map((el, index) => {
          // return <Numero key={index} num={el.numero} />
          console.log(el)
          return <li>{el[0]}</li>
        }
        )}
        {/* <li>Lundi</li>
        <li>Mardi</li>
        <li>Mercredi</li>
        <li>Jeudi</li>
        <li>Vendredi</li>
        <li>Samedi</li>
        <li>Dimanche</li> */}
      </ul>

      <ul className="days">

        {jours.map((el, index) => {

          return <Box key={index} actualDay={el[0]} numbers={el[1]} />


        }
        )}

      </ul>




    </div>
  );
}

export default App;
