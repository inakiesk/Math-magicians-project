import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <button type="button">{ value }</button>
    );
  }
}

CalculatorBtn.defaultProps = {
  value: null,
};

CalculatorBtn.propTypes = {
  value: PropTypes.string,
};
