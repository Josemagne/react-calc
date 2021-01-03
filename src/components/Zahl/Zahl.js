import React from 'react';

const Zahl = ({nummer, id, addNummer}) => {

  return (
    <li><button type="button" id={id} onClick={() => addNummer(nummer)} >
      {nummer}
    </button></li>
  );
}

export default Zahl;