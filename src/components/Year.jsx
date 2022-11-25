import { useEffect, useState } from "react";

const Year = (props) => {
  //state 
  let date = new Date();
  let actualYear = date.getFullYear();
  const [annee, setAnnee] = useState(actualYear);


  //comportements
  const increment = () => {
    // let actual = annee
    setAnnee(annee + 1);

  }
  useEffect(() => {
    props.onSendYear(annee);
  }, [annee, props]);


  const decrement = () => {
    setAnnee(annee - 1);
    // console.log(annee, ' <-annee');
    props.onSendYear(annee);
  }
  // setAnnee(props.an)
  //return 

  return (<div className="d-flex justify-content-evenly m-5">
    <button onClick={decrement} className="btn btn-lg btn-warning">{'<< left'}</button>
    <div className="btn btn-lg btn-light">{annee}</div>
    <button onClick={increment} className="btn btn-lg btn-success" >{' right >>'}</button>

  </div>)
}

export default Year;