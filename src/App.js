import React, {useEffect, useState} from 'react';
import Form from './components/form/Form';
import TodoList from './components/todo/TodoList';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case 'all':
      default:
        setFilteredTodos(todos);

    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };
  return (
      <div>
        <header>
          <h1>Todo List</h1>
        </header>
        <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
        />
        <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            setTodos={setTodos}/>
      </div>
  );
};

export default App;
