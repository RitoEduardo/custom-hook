import React, { useCallback, useState } from 'react';

import './../02-useEffect/effects.css';
import { Showincrement } from './Showincrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 )
    // }

    const increment = useCallback(
        ( num ) => {
            setCounter( (c) => c + num )
        },
        [ setCounter ],
    );

    return (
        <div>
            <h1> Use callback <strong> { counter }</strong> </h1>
            <hr />
            
            <Showincrement increment={increment} />
        </div>
    )
}
