import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map(todo => <TodoItem
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              todo={todo}
              text={todo.text}/>)}
        </ul>
      </div>
  );
};

export default TodoList;