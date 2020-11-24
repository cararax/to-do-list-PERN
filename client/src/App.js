import React, { Fragment } from 'react'
import './App.css';


//Components
import InputTodo from './components/InputTodo'
//import ListTodo from './components/ListTodo'
//import EditTodo from './components/EditTodo'


function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo></InputTodo>

      </div>
    </Fragment>
  );
}

export default App;
