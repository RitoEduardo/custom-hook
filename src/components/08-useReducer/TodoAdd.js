import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ( {handleAddTodo} ) => {

    const [ { desc }, handleInputChange, reset ] = useForm({ desc:'' });

    const handleSubmit = (ev) => {

        ev.preventDefault();

        if( desc.trim().length < 2 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc,
            done: false
        };

        handleAddTodo( newTodo );
        reset();
    }

    return (
        <>
            <h4> Agregar TODO </h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input
                    className="form-control"
                    type="text"
                    name="desc"
                    placeholder="New Task"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={desc}
                />
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary mt-2 btn-block">
                        Add Task
                    </button>
                </div>
            </form>
        </>
    )
}
