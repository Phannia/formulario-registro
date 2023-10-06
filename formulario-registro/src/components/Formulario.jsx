import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [error, setError] = useState (false)
    const validateData = (e) => {
        e.preventDefault()

        if (nombre === '' || email === '' || password === '' || checkPassword === '' ) 
        {
            setError(true);
            return;
        }
        setError(false);
        setNombre('');
        setEmail('');
        setPassword('');
        setCheckPassword('');

    }
  return (
    <div>
        <form className='formulario' onSubmit={validateData}>
            {error ? <p>Todos los campos son requeridos</p> : null}
            <div className='form-group'>
                <label></label>
                <input 
                placeholder='Nombre'
                type='text' 
                name='nombre'
                className='form-control'
                onChange={ (e) => setNombre(e.target.value) }
                />
            </div>
            <div className='form-group'>
                <label></label>
                <input 
                placeholder='tuemail@ejemplo.com'
                type='text' 
                name='email'
                className='form-control'
                onChange={ (e) => setEmail(e.target.value) }
                />
            </div>
            <div className='form-group'>
                <label></label>
                <input 
                placeholder='Contraseña'
                type='password' 
                name='Contraseña'
                className='form-control'
                onChange={ (e) => setPassword(e.target.value) }
                />
            </div>
            <div className='form-group'>
                <label></label>
                <input 
                placeholder='Confirma tu contraseña'
                type='password' 
                name='check-contraseña'
                className='form-control'
                onChange={ (e) => setCheckPassword(e.target.value) }
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Registrarse
            </button>
        </form>
    </div>
  )
}

export default Formulario