import React from 'react'

export default function Operator({id, operator, addOperator}) {
  return (
    <li><button type="button" id={id} onClick={
      () => addOperator(operator)
    }>{operator}</button></li>
  )
}
