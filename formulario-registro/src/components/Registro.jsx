// Requerimiento n°1
// Crea al menos 4 componentes, Registro, SocialButton, Formulario y Alert,
// donde el componente Registro importa todos los demás componentes.

import Formulario from './Formulario'
import SocialButton from './SocialButton'



const Registro = () => {
    return (
        <>
            <main className='container text-center bg-white p-3 rounded-4'>
                <h1>Crea una cuenta</h1>
                <div className='w-100 d-flex justify-content-center gap-2'>
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
                <div className='row'>
                    <p>O usa tu email para registrarte</p>
                </div>
                    <Formulario />
            </main>


        </>



    )
}

export default Registro