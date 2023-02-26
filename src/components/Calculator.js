import React, { useState } from 'react';
import CalculatorBtn from './CalculatorBtn';
import calculate from './logic/calculate';
import Navbar from './Navbar';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: '',
    next: null,
    operation: null,
  });

  const clickEvent = (e) => {
    const data = e.target.innerText;
    const state = calculate(obj, data);
    setObj(state);
  };

  const { total, next, operation } = obj;
  return (
    <div className="wrapper">
      <Navbar />
      <div className="calculator-wrapper">
        <h3 className="calculator-header">
          Let&apos;s do some Math!
        </h3>
        <div className="calculator">
          <div className="displayScreen">
            {total}
            {operation}
            {next}
          </div>
          <div className="calcBody">
            <div className="calcRow">
              <CalculatorBtn value="AC" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="+/-" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="%" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="÷" styling="calcBtn operator" clickEvent={clickEvent} />
            </div>
            <div className="calcRow">
              <CalculatorBtn value="7" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="8" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="9" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="x" styling="calcBtn operator" clickEvent={clickEvent} />
            </div>
            <div className="calcRow">
              <CalculatorBtn value="4" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="5" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="6" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="-" styling="calcBtn operator" clickEvent={clickEvent} />
            </div>
            <div className="calcRow">
              <CalculatorBtn value="1" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="2" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="3" styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="+" styling="calcBtn operator" clickEvent={clickEvent} />
            </div>
            <div className="calcRow">
              <CalculatorBtn value="0" styling="btn0" clickEvent={clickEvent} />
              <CalculatorBtn value="." styling="calcBtn" clickEvent={clickEvent} />
              <CalculatorBtn value="=" styling="calcBtn operator" clickEvent={clickEvent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
