import React, { Fragment } from 'react'
import './App.css';


//Components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
//import EditTodo from './components/EditTodo'


function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo></InputTodo>
        <ListTodos></ListTodos>

      </div>
    </Fragment>
  );
}

export default App;
