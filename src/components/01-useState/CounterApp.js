import React, { useState } from 'react'

import './counter.css';

export const CounterApp = () => {

    const [ { counterOne, counterTwo }, setCounter] = useState({ 
        counterOne: 10,
        counterTwo: 20
    })

    return (
        <>
            <h1> Counter One { counterOne } </h1>
            <h1> Counter Two { counterTwo } </h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setCounter( (c) => { 
                        // return { 
                        //     counterOne : counterOne + 1,
                        //     counterTwo : counterTwo 
                        // }
                        return { 
                            ...c,
                            counterOne : counterOne + 1
                        }
                    })
                }}
            >
                +1
            </button>
        </>
    )
}
