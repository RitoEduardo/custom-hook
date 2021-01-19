import React , { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    const handleInputChange = ( { target }) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect( () => {
        console.log('Hey!')
    }, [])

    useEffect( () => {
        console.log('formState!')
    }, [formState])

    return (
        <>
            <h1> Use effect </h1>
            <div className="form-group">
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Your name'
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <br />
                <input 
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Your email'
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message /> }

        </>
    )
}
