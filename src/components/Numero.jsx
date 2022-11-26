import { useEffect, useState } from "react";

const Numero = (props) => {
  const [numbers, setnumbers] = useState([]);

  useEffect(() => {
    

    return () => {

    };
  }, [props]);

  return (<li>{props.num}</li>);
}

export default Numero;