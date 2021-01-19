import React, { useEffect } from 'react'

export const Message = () => {


    useEffect(() => {

        console.log('Component mount');

        const mouseMove = (e) => {
            const coors = { x: e.x , y: e.y };
            console.log(coors);
        };

        window.addEventListener('mousemove', mouseMove )

        return () => {
            console.log('Component dismount');
            window.removeEventListener( 'mousemove', mouseMove );
        }

    }, [] )

    return (
        <div>
            <h1> Very good !!! </h1>
        </div>
    )
}
