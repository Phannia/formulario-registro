// Requerimiento n°1
// Crea al menos 4 componentes, Registro, SocialButton, Formulario y Alert,
// donde el componente Registro importa todos los demás componentes.

import Formulario from './Formulario'
import SocialButton from './SocialButton'



const Registro = () => {
    return (
        <>
            <div className='d-grid'>
                <div className='d-flex flex-column align-items-center p-2'>
                    <h1>Crea una cuenta</h1>
                    <div className='social-media w-25 d-flex justify-content-between '>
                        <SocialButton
                            icon='fa-brands fa-facebook fa-xl'
                        />
                        <SocialButton
                            icon='fa-brands fa-github fa-xl'
                        />
                        <SocialButton
                            icon='fa-brands fa-linkedin fa-xl'
                        />
                    </div>
                    <p>O usa tu email para registrarte</p>
                </div>
                <div>
                    <Formulario />
                </div>
            </div>


        </>



    )
}

export default Registro