import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar state = {props.state.sidebar}/>
        <div className = 'app-wrapper-content'>
          
          <Route path='/profile' render = { () =>  <Profile state = {props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText} /> }/>
          <Route path='/dialogs' render = { () => <Dialogs state = {props.state.dialogsPage} /> }/>
          {/* <Route path='/friends' render= { () => <Friends state = {props.state.sidebar} /> } /> */}
          <Route path='/news' component= { News }/>
          <Route path='/music' component= { Music }/>
          <Route path='/settings' component= { Settings }/>
        </div>
      </div>

  );
}

export default App
