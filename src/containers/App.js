import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from '../logo.png';
import './App.css';
import HomeScreen from './HomeScreen';
import LearnWords from './LearnWords';
import PracticeWords from './PracticeWords';
import AddWord from './AddWord';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <Route exact path='/' render={()=>(
          <HomeScreen />
        )}/>
        <Route path='/learn/:group' render={({match})=>(
          <LearnWords group={match.params.group} />
        )}/>
        <Route path='/practice/:group' render={({match})=>(
          <PracticeWords group={match.params.group} />
        )}/>
        <Route path='/add-word' render={()=>(
          <AddWord />
        )}/>
        <Route path='/todo-list' render={()=>(
          <TodoList />
        )} />
      </div>
    );
  }
}

export default App;
