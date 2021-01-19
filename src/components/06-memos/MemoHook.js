import React, { useMemo, useState } from 'react'
import { loaderData } from '../../helpers/loaderData';
import { useCounter } from '../../hooks/useCounter';

import './../02-useEffect/effects.css';

export const MemoHook = () => {


    const { counter, increment } = useCounter(5000);

    const [show, setShow] = useState(true);

    const memoLoaderData = useMemo( ()=> loaderData(counter), [counter]);


    return (
        <div>
            <h1> Memo Hoke </h1>
            <h3> Counter: <small> { counter } </small> </h3>
            <hr />

            <p> { memoLoaderData } </p>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button 
                className="btn btn-secondary"
                onClick={ ()=> { setShow(!show) } }
            >
                Show/Hide : { show.toString() }
            </button>
        </div>
    )
}
