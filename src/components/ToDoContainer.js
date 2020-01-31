import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'

export default class ToDoContainer extends Component {
  filterComplete = () => this.props.todos.filter(todo => todo.completed)
  filterIncomplete = () => this.props.todos.filter(todo => !todo.completed)
  render() {
    
    return (
      <div id="todo-container">
        <CompletedContainer handleCompleteChange={this.props.handleCompleteChange} todos={this.filterComplete()} />
        <IncompleteContainer handleCompleteChange={this.props.handleCompleteChange} todos={this.filterIncomplete()}/>
      </div>
    );
  }
}
