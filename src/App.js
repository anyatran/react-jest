import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h2>
        {this.props.title}
      </h2>
    )
  }
}
