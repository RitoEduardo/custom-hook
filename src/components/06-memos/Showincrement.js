import React from 'react'

export const Showincrement = React.memo( ( { increment } ) => {

    console.log('me volvi a generar')
    const cnum = 5;

    return (
        <button
            className="btn btn-primary"
            onClick={ 
                () => {
                    increment( cnum );
                }
            }
        >
            Incrementar en { cnum }
        </button>
    )
})
