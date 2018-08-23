import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Auth from './components/Auth'
import firebase from 'firebase'


class App extends React.Component {  
  
  componentWillMount(){
    
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Auth/>
          <TaskList
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
