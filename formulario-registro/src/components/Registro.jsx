// Requerimiento n°1
// Crea al menos 4 componentes, Registro, SocialButton, Formulario y Alert,
// donde el componente Registro importa todos los demás componentes.

import Formulario from './Formulario'
import SocialButton from './SocialButton'



const Registro = () => {
    return (
        <>
        <h1>Crea una cuenta</h1>
            <div>
                <SocialButton
                    icon='fa-brands fa-facebook'
                />
                <SocialButton
                    icon='fa-brands fa-github'
                />
                <SocialButton
                    icon='fa-brands fa-linkedin'
                />
            </div>
            <div>
                <Formulario />
            </div>

        </>



    )
}

export default Registro