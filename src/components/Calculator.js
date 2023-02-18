import React from 'react';
import CalculatorBtn from './CalculatorBtn';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,
    };
  }

  clickEvent = (e) => {
    const data = e.target.innerText;
    const state = calculate(this.state, data);
    this.setState(state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="displayScreen">
          {total}
          {operation}
          {next}
        </div>
        <div className="calcBody">
          <div className="calcRow">
            <CalculatorBtn value="AC" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="+/-" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="%" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="÷" styling="calcBtn operator" clickEvent={this.clickEvent} />
          </div>
          <div className="calcRow">
            <CalculatorBtn value="7" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="8" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="9" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="x" styling="calcBtn operator" clickEvent={this.clickEvent} />
          </div>
          <div className="calcRow">
            <CalculatorBtn value="4" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="5" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="6" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="-" styling="calcBtn operator" clickEvent={this.clickEvent} />
          </div>
          <div className="calcRow">
            <CalculatorBtn value="1" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="2" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="3" styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="+" styling="calcBtn operator" clickEvent={this.clickEvent} />
          </div>
          <div className="calcRow">
            <CalculatorBtn value="0" styling="btn0" clickEvent={this.clickEvent} />
            <CalculatorBtn value="." styling="calcBtn" clickEvent={this.clickEvent} />
            <CalculatorBtn value="=" styling="calcBtn operator" clickEvent={this.clickEvent} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
