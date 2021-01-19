import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1> LOGIN SCREEN </h1>  
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setUser({
                        id: 25,
                        name: 'Rito García',
                        mail: 'riegala@mail.com'

                    })
                }}    
            >

                Add User
            </button>
        </>
    )
}
