import { useState } from 'react'


const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [validate, setValidate] = useState({ isShown: true, msg: '' });


    const validateData = (e) => {

        e.preventDefault()

        if (nombre === '' || email === '' || password === '' || checkPassword === '') {
            setValidate({ isShown: true, msg: 'Todos los campos son obligatorios' });
            return;
        } else if (password !== checkPassword) {
            setValidate({ isShown: true, msg: 'Las Contraseñas deben ser identicas' });
            return;
        } else {
            setValidate({ isShown: true, msg: 'Se ha registrado con Exito' });
            setNombre('');
            setEmail('');
            setPassword('');
            setCheckPassword('');
            return;
        }




    };
    return (
        <div>
            {validate ? <p className="text-center text-danger">{validate.msg}</p> : null}
            <form className='formulario' onSubmit={validateData}>
                <div className='form-group'>
                    <label></label>
                    <input
                        placeholder='Nombre'
                        type='text'
                        name='nombre'
                        className='form-control'
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label></label>
                    <input
                        placeholder='tuemail@ejemplo.com'
                        type='text'
                        name='email'
                        className='form-control'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label></label>
                    <input
                        placeholder='Contraseña'
                        type='password'
                        name='Contraseña'
                        className='form-control'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label></label>
                    <input
                        placeholder='Confirma tu contraseña'
                        type='password'
                        name='check-contraseña'
                        className='form-control'
                        onChange={(e) => setCheckPassword(e.target.value)}
                    />
                </div>
                <div className='form-group d-grid gap-2 mx-auto'>
                    <button type='submit' className='btn btn-primary form-control'>
                        Registrarse
                    </button>
                </div>



            </form>
        </div>
    )
}

export default Formulario