import React from "react";

export default class Nice extends React.Component {
  render() {
    <p>----------From Nice Component ----------</p>
    return <div>{this.props.name}</div>
  }
}

// Class based component

// Class based component with state