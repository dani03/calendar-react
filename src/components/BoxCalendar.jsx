import { useEffect, useState } from "react";
import Numero from "./Numero";

const BoxCalendar = ({ theMonth, year }) => {

  //state
  const [jours, setJours] = useState([]);
  const [mois, setMois] = useState(theMonth);

  //comportements

  let actualDate = new Date();
  let actualMonth = mois;
  var days = {
    'lundi': [],
    'mardi': [],
    'mercredi': [],
    'jeudi': [],
    'vendredi': [],
    'samedi': [],
    'dimanche': [],
  };


  useEffect(() => {
    Object.entries(days).forEach(
      ([key, value]) => {
        console.log("cle", key, "valeur", value)
      }
    );

  }, []);

  const getDaysInMonth = (mois, year) => {
    console.log("mois actual: ", actualMonth)
    var date = new Date(year, mois, 1);
    console.log(date.getMonth());

    while (date.getMonth() == mois) {

      Object.entries(days).forEach(
        ([key, value]) => {
          console.log("cle", key, "valeur", value);
          if (key === date.toLocaleString("fr-FR", { "weekday": "long" })) {
            days[key].push({ 'numero': new Date(date).getDate(), "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });
          }
        }
      );
      // days.push({ 'numero': new Date(date).getDate(), "day": date.toLocaleString("fr-FR", { "weekday": "long" }), "month": date.getMonth() });
      date.setDate(date.getDate() + 1);
    }
    setJours(days);
  }

  return (<div className="d-flex justify-content-evenly w-100">
    <table className="table container border-2 border border-secondary">
      <thead>
        <tr className="text-center">
          <th>lundi</th>
          <th>mardi</th>
          <th>mercredi</th>
          <th>jeudi</th>
          <th>vendredi</th>
          <th>samedi</th>
          <th>dimanche</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">

          <td><Numero num="1" /></td>
          <td><Numero num="2" /></td>
          <td><Numero num="3" /></td>
          <td><Numero num="4" /></td>
          <td><Numero num="5" /></td>
          <td><Numero num="6" /></td>
          <td><Numero num="7" /></td>


        </tr>
      </tbody>
    </table>

  </div>);
}

export default BoxCalendar;