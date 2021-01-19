import React, { useRef } from 'react';

import './../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        // document.querySelector('input').select(); //focus();
        inputRef.current.select();
    }

    return (
        <>
            <h1> Focus Scrreen </h1>

            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Your name"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </>
    )
}
