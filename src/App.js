import React from "react"
import './App.css';
import FuncComp from "./Components/FuncComp";
import ClassComp from "./Components/ClassComp";
class App extends React.Component{
  render(){
      return (
        <div className="Style">
          <h1>Styling using Functional and Class Component</h1>
          <FuncComp />
          <ClassComp />
        </div>
      );
  }
}

export default App;