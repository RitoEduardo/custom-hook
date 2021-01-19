import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import './../02-useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1> Real Example React </h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button 
                className="btn btn-secondary mt-15"
                onClick={ () => { 
                    setShow(!show) 
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
