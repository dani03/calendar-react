import { useEffect, useState } from "react";

const Month = (props) => {
  let actualDate = new Date();
  const mois = ["Janvier", "Février", "Mars",
    "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre",
    "Octobre", "Novembre", "Décembre"];


  //state 
  const [theMonthNumber, setTheMonthNumber] = useState(actualDate.getMonth());
 


  //comportements
  const increment = () => {
    if (theMonthNumber < mois.length - 1) {
      setTheMonthNumber(theMonthNumber + 1);
      // props.onSendMonthAndYear(theMonthNumber, theYearNumber);
     
    }
  }

  useEffect(() => {
    props.onSendMonth(theMonthNumber);
    // return () => {
      
    // };
  }, [theMonthNumber, props]);

  const decrement = () => {
    if (theMonthNumber > 0) {
      setTheMonthNumber(theMonthNumber - 1);
      
    
    }
  }
  //return
  return (
    <>
      <div className="d-flex justify-content-evenly m-5">
        <button
          onClick={decrement} className="btn btn-lg btn-warning">{'<< left'}</button>
        <div className="btn btn-lg btn-light">{mois[theMonthNumber]}</div>
        <button onClick={increment} className="btn btn-lg btn-success" >{' right >>'}</button>
      </div>

     
    </>
  );
}

export default Month;