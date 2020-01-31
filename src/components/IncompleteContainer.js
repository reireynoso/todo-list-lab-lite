import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

    // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    state = {
        searchTerm: ""
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    handleOnChange = (val) => {
        this.setState({
            searchTerm: val
        })
    }

    filterOut = () => this.props.todos.filter(todo => todo.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  render() {
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent handleOnChange={this.handleOnChange}/>
            {/* Render ToDo Card for each ToDo */} 
            {/* Which Array method can you use? */}
            {this.filterOut().map(todo => <ToDoCard handleCompleteChange={this.props.handleCompleteChange} todo={todo}/>)}
        </div>
    )
  }
}
