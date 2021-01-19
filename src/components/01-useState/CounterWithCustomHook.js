import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h1> Counter With Hook : { state } </h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                + 1
            </button>
            <button 
                className="btn btn-secondary"
                onClick={ decrement }
            >
                - 1
            </button>
            <br />
            <br />
            <button 
                className="btn btn-primary"
                onClick={ reset }
            >
                reset
            </button>

        </div>
    )
}
