import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {

    const Todo = ({ todo, index, completeTodo, removeTodo }) => {
        return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
                    {todo.text}
                <div>
                    <button onClick={() => completeTodo(index)}>Complete</button>
                    <button onClick={() => removeTodo(index)}>X</button>
                </div>
                </div>;
    }

    const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState('');

        const handleSubmit = e => {
            e.preventDefault();
            if(!value) return;
            addTodo(value);
            setValue('');
        }

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Add Todo" value={value} onChange={e => setValue
                (e.target.value)} />
            </form>
        )
    }

    const [todos, setTodos] = useState([
        {
            text: 'Learn React Basics, Hooks, Redux',
            isCompleted: false
        },
        {
            text: 'Learn NodeJs Basics, Advance',
            isCompleted: false
        },
        {
            text: 'Learn Web Development',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos , { text }];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <Todo 
                    key={index} 
                    index={index} 
                    todo={todo} 
                    completeTodo={completeTodo}
                    removeTodo={removeTodo} 
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default Todo;