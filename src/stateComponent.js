import React from "react";

export default class StateComponent extends React.Component {
  mystate = {
    name: "Raghu",
    Designation: "FullStackDeveloper",
    AttendClass: 10
  }
  click = () => {
    let count = this.mystate.AttendClass += 1
    // console.log(count);
    this.setState({
      name: "Raghu",
      Designation: "FullStackDeveloper",
      AttendClass: count
    })
  }

  delClick = () => {
    let decreseCount = this.mystate.AttendClass -= 1
    if (decreseCount < 0) {
      return decreseCount = 0
    }

    this.setState({
      ...this.mystate,
      AttendClass: decreseCount
    })
  }

  render() {
    return (
      <div><ul>
        <p>--------------using State in this Component-------------------</p>
        <p>Name: {this.mystate.name}</p>
        <p>Designation: {this.mystate.Designation}</p>
        <p>AttendClass: {this.mystate.AttendClass}</p>
        <button className="addClass space" onClick={this.click}>Add Class Count</button>
        <button className="delClass space" onClick={this.delClick}>Delete Class Count</button>
      </ul>
      </div>
    )
  }
}

// Class based component with state
/* 
mysatate is an object with details

click is an onClick event in the button whenever we click the button the AttendClass count will be increse but it won't show in the client side.
If we want show the incresed output in client we have "setState" inbuilt react method {...this.mystate} means we are spreading all the mystate object in setState
and AttendClass:count already we have declared initialized and increse the AttendClass and store in the count variable
"this.mystate.name"
"this.mystate.designation"
"this.click"
since we are creating component from "React.Component" the setState,useState will be availabel inbuilt we don't want to import while in function component we need to import
 */






