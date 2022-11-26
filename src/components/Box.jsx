import { useEffect, useState } from "react";

const Box = (props) => {
  const [arrayNumbers, setArrayNumbers] = useState([]);
  const [jourActuel, setjourActuel] = useState([]);

  useEffect(() => {

    setArrayNumbers(props.numbers)
    setjourActuel(props.actualDay)

  }, [props]);


  return (<>
    {arrayNumbers.map((element, index) => {
      if (element.day === jourActuel) {
        return <li key={index}>{element.numero}</li>
      } else {
        //  return <li>{" "}</li>
      }
    })}
  </>
  );
}

export default Box;