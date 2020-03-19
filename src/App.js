import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Friends from './components/Friends/Friends';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { Route } from 'react-router-dom';

const App = () => {
  
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className = 'app-wrapper-content'>
          
          <Route path='/profile' render = { () =>  <Profile   /> }/>

          <Route path='/dialogs' render = { () => <DialogsContainer /> }/>

          {/* <Route path='/friends' render= { () => <Friends state = {props.state.sidebar} /> } /> */}
          <Route path='/news' component= { News }/>
          <Route path='/music' component= { Music }/>
          <Route path='/settings' component= { Settings }/>
        </div>
      </div>

  );
}
//store = {props.store} state = {props.state.profilePage} dispatch = {props.dispatch}
//store = {props.store} state = {props.state.dialogsPage} dispatch = {props.dispatch} 
//
export default App
