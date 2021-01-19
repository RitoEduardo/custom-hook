import React, { useEffect, useReducer } from 'react'

import './styles.css';
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

/*
const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];
*/
const init = () => {
    // const x = localStorage.getItem('ws-todos')
    return JSON.parse( localStorage.getItem('ws-todos') ) || [];
}


export const TodoApp = () => {

    const [ todos ,  dispatch] = useReducer(todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('ws-todos', JSON.stringify(todos) );
    }, [todos])


    const handleAddTodo = (newTodo) => {

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
    }

    const handleDelete = ( todoID ) => {
        console.log('Delete Task', todoID );
        const action = {
            type: 'delete',
            payload: todoID
        }
        dispatch( action );
    }

    const handleToggle = (todoID) => {
        console.log('Toggle Task', todoID );
        const action = {
            type: 'toggle',
            payload: todoID
        }
        dispatch( action );
    }

    return (
        <>
            <h1> Todo App ( { todos.length }) </h1>  
            <hr />

            <div className="container">
                <div className="row">
                    <div className="col-7">
                    { /* TodoList, todos */}
                    <TodoList 
                        todos= { todos }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                    </div>
                    <div className="col-4">
                        <TodoAdd
                            handleAddTodo={ handleAddTodo }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
