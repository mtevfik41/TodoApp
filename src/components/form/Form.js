import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
  const [disabled, setDisabled] = useState(false);

  const inputTextHandler = e => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = e => {
    e.preventDefault();
    if(inputText === '') {
      setInputText('Input cannot be empty!')
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
        setInputText('');
      },2000)
    } else {
      setTodos([
        ...todos, {
          text: inputText,
          completed: false,
          id: uuidv4(),
        }]);
      setInputText('');
    }
  };
  const statusHandler = e => {
    setStatus(e.target.value);
  };
  return (
      <form>
        <div className="form-input">
          <input
              type="text"
              className="todo-input"
              value={inputText}
              onChange={inputTextHandler}
              disabled={disabled}
          />
          <button
              onClick={submitTodoHandler}
              className="todo-button"
              type="submit"
              disabled={disabled}
          >

            <i className="fas fa-plus-square"/>
          </button>
        </div>
        <div className="select">
          <select
              onChange={statusHandler}
              name="todos"
              className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  );
};

export default Form;