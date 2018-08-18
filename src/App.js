import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TaskList
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
