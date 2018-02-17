import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function ResultBox(props) {
  return (
    <div className="resultbox">{props.text}</div>
  )
}

function Box(props) {
  return (
    <button className="box" onClick={props.onClick}>{props.text}</button>
  );
}

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      op1: "0",
      op2: "0",
      selectop: 1,
      op: '+',
      text: "",
      lastop: '',
    }
  }

  handleClick(text) {
    var currentState = this.state;
    var nextState = this.state;
    var selectop = currentState.selectop;
    if(currentState.lastop === "=") {
      currentState.text = "";
    }
    nextState.lastop = text;
    if(text !== "+" && text !== "-" && text !=="=" && text !=="*" && text !=="/") {
      if (selectop === 1) {
        nextState.op1 = currentState.op1 + text;
      }
      else {
        nextState.op2 = currentState.op2 + text;
      }
      nextState.text = currentState.text + text;
    }
    else if(text === "=") {
      var result;
      if(currentState.op === "+") {
        result = Number(currentState.op1) + Number(currentState.op2)
      }
      else if(currentState.op === "-") {
        result = Number(currentState.op1) - Number(currentState.op2)
      }
      else if(currentState.op === "*") {
        result = Number(currentState.op1) * Number(currentState.op2)
      }
      else if(currentState.op === "/") {
        result = Number(currentState.op1) / Number(currentState.op2)
      }
      nextState.op1 = "";
      nextState.op2 = "";
      nextState.selectop = 1;
      nextState.op = "+";
      nextState.text = currentState.text + "=" + result;
    }
    else {
      if(currentState.text === "")
        return;
      if(currentState.text.indexOf("+") !== -1 || currentState.text.indexOf("-") !== -1 || currentState.text.indexOf("*") !== -1 || currentState.text.indexOf("/") !== -1){
        return;
      }
      if(currentState.selectop === 1) {
        nextState.selectop = 2
      }
      else {
        nextState.selectop = 1
      }
      nextState.op = text;
      nextState.text = currentState.text + text;
    }
    this.setState(nextState)

  }

  render() {
    return (
      <div>
      <ResultBox text={this.state.text} />
      <table>
      <tbody>
      <tr>
      <th>
      <Box text="0" onClick={() => this.handleClick("0")} />
      </th>
      <th>
      <Box text="1" onClick={() => this.handleClick("1")} />
      </th>
      <th>
      <Box text="2" onClick={() => this.handleClick("2")} />
      </th>
      </tr>
      <tr>
      <th>
      <Box text="3" onClick={() => this.handleClick("3")} />
      </th>
      <th>
      <Box text="4" onClick={() => this.handleClick("4")} />
      </th>
      <th>
      <Box text="5" onClick={() => this.handleClick("5")} />
      </th>
      </tr>
      <tr>
      <th>
      <Box text="6" onClick={() => this.handleClick("6")} />
      </th>
      <th>
      <Box text="7" onClick={() => this.handleClick("7")} />
      </th>
      <th>
      <Box text="8" onClick={() => this.handleClick("8")} />
      </th>
      </tr>
      <tr>
      <th>
      <Box text="9" onClick={() => this.handleClick("9")} />
      </th>
      <th>
      <Box text="+" onClick={() => this.handleClick("+")} />
      </th>
      <th>
      <Box text="-" onClick={() => this.handleClick("-")} />
      </th>
      </tr>
      <tr>
      <th>
      <Box text="*" onClick={() => this.handleClick("*")} />
      </th>
      <th>
      <Box text="/" onClick={() => this.handleClick("/")} />
      </th>
      <th>
      <Box text="=" onClick={() => this.handleClick("=")} />
      </th>
      </tr>
      </tbody>
      </table>
      </div>
    )
  }
}
ReactDOM.render(<Calculator />, document.getElementById("root"))
