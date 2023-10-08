

const SocialButton = ({ icon }) => {
    return (
        <>

            <button className="btn btn-outline-dark rounded-circle">
                <a className='icon-link'><i className={icon}></i></a>
            </button>
        </>
    )
}

export default SocialButton