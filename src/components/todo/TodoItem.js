import React from 'react';

const TodoItem = ({text, todo, todos, setTodos}) => {
  const deleteHandler = e => {
    e.target.parentElement.classList.add('fall');
    setTimeout(() => {
      setTodos(todos.filter(el => el.id !== todo.id));
    }, 200);
  };
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    }));
  };
  return (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {text}
        </li>

        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"/>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"/>
        </button>

      </div>
  );
};

export default TodoItem;