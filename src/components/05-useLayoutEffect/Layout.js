import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


import './layout.css';
// import './../02-useEffect/effects.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];

    const [boxSize, setBoxSize] = useState({})

    const pTag = useRef()

    useLayoutEffect( () => {
        
        setBoxSize( pTag.current.getBoundingClientRect() );
        
    }, [quote])

    return (
        <>
            <h1> Layout - Breaking Bad Quotes </h1>
            <hr />
            {/* 
            {
                loading
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                ( */}
                    <blockquote className="blockquote">
                        <p 
                            className="mb-0"
                            ref={ pTag }
                        > 
                            { quote } 
                        </p>
                    </blockquote>

                    <pre>
                        { JSON.stringify(boxSize, null, 3) }
                    </pre>
            {   /* )
            } */}

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                Next Quote
            </button>
        </>
    )
}
