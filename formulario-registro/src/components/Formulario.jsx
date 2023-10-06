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
                <label>Nombre</label>
                <input 
                type='text' 
                name='nombre'
                className='form-control'
                onChange={ (e) => setNombre(e.target.value) }
                />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input 
                type='text' 
                name='email'
                className='form-control'
                onChange={ (e) => setEmail(e.target.value) }
                />
            </div>
            <div className='form-group'>
                <label>contraseña</label>
                <input 
                type='text' 
                name='Contraseña'
                className='form-control'
                onChange={ (e) => setPassword(e.target.value) }
                />
            </div>
            <div className='form-group'>
                <label>Nombre</label>
                <input 
                type='text' 
                name='check-contraseña'
                className='form-control'
                onChange={ (e) => setCheckPassword(e.target.value) }
                />
            </div>
        </form>
    </div>
  )
}

export default Formulario