import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        { display }
      </div>
    );
  }
}

export default Calculator;
