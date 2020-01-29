import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'

export default class ToDoContainer extends Component {
  render() {
    return (
      <div id="todo-container">
        <CompletedContainer/>
        <IncompleteContainer/>
      </div>
    );
  }
}
