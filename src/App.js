import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'

const todosArr = [
  {
    "title": "Eat",
    "completed": true
  },
  {
    "title": "Sleep",
    "completed": false
  },
  {
    "title": "Listen to Eric talk about how much he loves Fortnite",
    "completed": false
  },
  {
    "title": "Workout",
    "completed": true
  },
  {
    "title": "Lecture",
    "completed": false
  },
  {
    "title": "Code",
    "completed": true
  }
]

class App extends React.Component{

  state = {
    todos: todosArr
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer/>
      </div>
    );
  }
}

export default App;
