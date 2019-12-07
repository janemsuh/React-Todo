import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
        };
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({ todoText: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='todoText'
                    placeholder='...todo'
                    value={this.state.todoText}
                    onChange={this.handleChange}
                />
                <button type='submit'>Add</button>
                <button onClick={this.props.clearCompleted} type='reset'>Clear</button>
            </form>
        );
    };
};

export default TodoForm;