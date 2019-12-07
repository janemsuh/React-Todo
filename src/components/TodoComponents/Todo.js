import React from 'react';

const Todo = props => {
    return (
        <div
            className={`todo${props.todo.completed ? " completed" : ""}`}
            onClick={e => props.toggleTodo(props.todo.id)}
        >
            <h3>{props.todo.task}</h3>
        </div>
    );
};

export default Todo;