import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoComponent from './components/ToDoComponent'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoComponent/>
      </div>
    );
  }
}

export default App;
