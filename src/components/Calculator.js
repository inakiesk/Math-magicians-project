import React from 'react';
import CalculatorBtn from './CalculatorBtn';

function Calculator() {
  return (
    <div className="calculator">
      <div className="displayScreen">
        0
      </div>
      <div className="calcBody">
        <div className="calcRow">
          <CalculatorBtn value="AC" styling="calcBtn" />
          <CalculatorBtn value="+/-" styling="calcBtn" />
          <CalculatorBtn value="%" styling="calcBtn" />
          <CalculatorBtn value="÷" styling="calcBtn operator" />
        </div>
        <div className="calcRow">
          <CalculatorBtn value="7" styling="calcBtn" />
          <CalculatorBtn value="8" styling="calcBtn" />
          <CalculatorBtn value="9" styling="calcBtn" />
          <CalculatorBtn value="x" styling="calcBtn operator" />
        </div>
        <div className="calcRow">
          <CalculatorBtn value="4" styling="calcBtn" />
          <CalculatorBtn value="5" styling="calcBtn" />
          <CalculatorBtn value="6" styling="calcBtn" />
          <CalculatorBtn value="-" styling="calcBtn operator" />
        </div>
        <div className="calcRow">
          <CalculatorBtn value="1" styling="calcBtn" />
          <CalculatorBtn value="2" styling="calcBtn" />
          <CalculatorBtn value="3" styling="calcBtn" />
          <CalculatorBtn value="+" styling="calcBtn operator" />
        </div>
        <div className="calcRow">
          <CalculatorBtn value="0" styling="btn0" />
          <CalculatorBtn value="." styling="calcBtn" />
          <CalculatorBtn value="=" styling="calcBtn operator" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
