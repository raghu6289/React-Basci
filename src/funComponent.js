import React from "react";

export default function NiceFun(props) {
  const popBox = () => {
    alert("Hello ")
  }
  return (
    <>
      <p>----------From NiceFun Component ----------</p>
      <div>Hello From funComponent</div>
      <h3>{props.name}</h3>
      <button onClick={popBox}>Alert</button>
    </>
  )
}

// function based component

// since its an function component the "this" is not available so directly we can provide the name