import React from 'react'

const SocialButton = ({icon, name}) => {
  return (
    <div>
      <h1>Crea una cuenta</h1>
      <div className='icon-box'>
        <a className='icon-link'><i className={icon}></i>{name}</a>
      </div>
    </div>
  )
}

export default SocialButton