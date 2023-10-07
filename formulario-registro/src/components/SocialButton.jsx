

const SocialButton = ({icon, name}) => {
  return (
    <div>
      
      <div className='icon-box'>
        <a className='icon-link'><i className={icon}></i>{name}</a>
      </div>
    </div>
  )
}

export default SocialButton