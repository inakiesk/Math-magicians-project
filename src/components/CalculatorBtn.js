import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, styling } = this.props;
    return (
      <button type="button" className={styling}>{ value }</button>
    );
  }
}

CalculatorBtn.defaultProps = {
  value: null,
  styling: null,
};

CalculatorBtn.propTypes = {
  value: PropTypes.string,
  styling: PropTypes.string,
};
