import React from 'react';
import logo from './logo.svg';
import {UserProvider} from './context/UserContext'
import {Switch,Route} from 'react-router-dom'
import './App.css';

import { Login } from './features/login/Login'
import { CreateUser } from './features/createUser/CreateUser';
import { FriendList } from './features/friends/FriendList'
import { Transfer } from './features/transfers/Transfer'
import { MakeFriend } from './features/friends/MakeFriend';


function App() {
  return (
    <UserProvider>
    <div className="App">
      <Route render={({location})=>(
        <Switch location={location}>
          <Route exact path="/" component={Login}/>
          <Route exact path="/createUser" component={CreateUser}/>
          <Route exact path="/friendList" component={FriendList}/>
          <Route exact path="/makeTransfer" component={Transfer}/>
          <Route exact path="/makeFriend" component={MakeFriend}/>
        </Switch>

      )}/>
    </div>
    </UserProvider>
  );
}

export default App;
