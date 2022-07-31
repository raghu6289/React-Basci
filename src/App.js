// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nice from './newComponent';
import NiceFun from './funComponent';
import StateComponent from './stateComponent';
import FunStateComponent from './stateteComponentFun';

// external component
function MainApp() {
  return (
    <div>
      <p>----------From MainApp Component ----------</p>
      <Nice name={"Raghu"} />
    </div >
  )
}

// internal component and calling MainApp compnonet
class App extends React.Component {
  state = {
    btn_color: 'button_red'
  }

  click = () => this.setState({
    btn_color: 'button_grey'
  })

  render() {
    return (
      <div>
        <p>----------From App Component ----------</p>
        <button onClick={this.click} className={this.state.btn_color}>
          Click Me
        </button>
        <div>
          <MainApp />
        </div>
      </div>
    )
  }
}

// internal component and calling App Component
class Shoping extends React.Component {
  render() {
    return (
      <div className='shoping-List'>
        <p>----------From Shoping Component ----------</p>
        <h1>Shoping List</h1>
        <ul>Main</ul><ul>
          <li> Instagram</li>
          <li> WhatsApp</li>
          <li> Facebook</li>
        </ul>
        <div>
          <App />
          <NiceFun name={"Hello From App.js to FunNice Compononet throgh props"} />
          <StateComponent />
          <FunStateComponent />
        </div>
      </div>
    )
  }
}

export { App, MainApp, Shoping };
// export default App
