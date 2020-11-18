import './App.css';
import React, {useState,useEffect,useRef} from 'react';
import Todo from './todo';

function App() {

  const [input,setInput] = useState('');

  const [todos,setTodos] = useState([]);

  const inputRef = useRef(null);

  const getTodo = (e) => {
    e.preventDefault();

    if(todos.length === 0){
      const newTodos = [{key:Math.floor((Math.random() * 10000) + 1),text:input}];
      setTodos(newTodos);
      setInput('');
    }

    else{
      const newTodos = [{key:Math.floor((Math.random() * 10000) + 1),text:input},...todos];
      setTodos(newTodos);
      setInput('');
    };
  };

  useEffect( async () => {
    inputRef.current.focus();
  });


  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={getTodo} className="form">
          <input type='text' value={input} onChange={e => setInput(e.target.value)} ref={inputRef} className='input' />
          <button type='submit' className="btn">Add Todo</button>
        </form>

        {todos.map(t => (
          <div className="todo">
            <Todo item={t.text} key={t.key} id={t.key} />
            <button onClick={() => setTodos(todos.filter(b => b.key !== t.key))} className="delete-btn">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
