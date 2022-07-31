import React, { useState } from "react";

export default function FunStateComponent() {
  const [addNumber, setname] = useState("Number Increment");
  let [num, setnum] = useState(10)
  const add = () => {
    setnum(num + 1)
  }
  const del = () => {
    if (num <= 0) return setnum(num = 0) // avoiding negative values
    setnum(num - 1)
  }

  return (
    <div>
      <ul>
        <p>---------------using State in Function--------------</p>
        <p>Name: {addNumber}</p>
        <p>Number: {num}</p>
        <button className="addClass space" onClick={add}>increse</button>
        <button className="delClass space" onClick={del}>Decrease</button>
      </ul>
    </div>
  )
}





