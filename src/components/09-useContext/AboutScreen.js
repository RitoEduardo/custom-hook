import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1> ABOUT SCREEN </h1>  
            <hr />

            <pre>
                { JSON.stringify(user,null,3)}
            </pre>
            
            <button 
                className="btn btn-warning"
                onClick={ () => {
                    setUser({
                    })
                }}    
            >

                Empty data
            </button>
        </>
    )
}
