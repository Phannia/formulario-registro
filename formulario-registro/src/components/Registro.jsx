// Requerimiento n°1
// Crea al menos 4 componentes, Registro, SocialButton, Formulario y Alert,
// donde el componente Registro importa todos los demás componentes.

import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'

import React from 'react'

const Registro = () => {
  return (
    <div>
        <SocialButton 
        icon = 'fa-brands fa-facebook'
        />
        <SocialButton
        icon = 'fa-brands fa-github' 
        />
        <SocialButton 
        icon = 'fa-brands fa-linkedin'
        />
        <Formulario />
        
    </div>
  )
}

export default Registro