import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import { useState } from 'react';
import React from 'react';


function App() {

  const [state, setState] = useState({
    flagTodoList: false
  });

  return (
    <>
      <div className="App">
        {state.flagTodoList === false &&
          <header className="App-header">
            <button className="buttonList" onClick={() => setState({ flagTodoList: true })}>Vai alla Todo List! </button>
          </header>
        }
      </div >
      {state.flagTodoList === true &&
        <Todolist
          placeholder="Cosa vuoi comprare?"
        />
      }
    </>
  );
}

export default App;












