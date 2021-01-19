import React , { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';
// import { Message } from './Message';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email , password } = formValues;

    useEffect( () => {
        console.log('validate email', email );
    }, [email])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    // const handleInputChange = ( { target }) => {
        
    //     setFormState({
    //         ...formState,
    //         [target.name]: target.value
    //     })
    // }

    return (
        <form onSubmit={ handleSubmit } >
            <h1> FormWithCustomHook </h1>
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
                <br />
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
                Create
            </button>
        </form>
    )
}
