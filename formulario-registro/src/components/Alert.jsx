import Alerts from 'react-bootstrap/Alert';

const Alert = (prop) => {
  return (
    <Alerts key={prop.variant} variant={prop.variant}>
        <p>{prop.msg}</p>
    </Alerts>
  )
}

export default Alert