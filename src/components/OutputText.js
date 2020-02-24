import React, { Component } from 'react';

class OutputText extends Component {
  render() {
    return <h2 className='output'>{this.props.output}</h2>;
  }
}

export default OutputText;
