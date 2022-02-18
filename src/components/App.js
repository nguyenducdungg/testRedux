import React from 'react';
import '../App.css';
import Todolist from '../containers/Todolist'
import Login from '../containers/Login'

function App({ auth }) {
  console.log(auth?.token);
  return (
    <div className="App">
      {!!auth?.token && <Login />}
      {auth?.token && <Todolist />}
    </div>
  );
}

export default App;