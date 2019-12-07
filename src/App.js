import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = todoText => {
    const newTodo = {
      task: todoText,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = event => {
    let todos = this.state.todos;
    todos = todos.filter(todo => todo.completed !== true);
    this.setState({todos});
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm
            value={this.state.todo}
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
