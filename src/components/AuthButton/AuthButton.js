import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { Button } from './StyledComponent'


export default function AuthButton({ toggle }) {
    return (
        <Button type='button' onClick={() => toggle()}><FontAwesomeIcon icon={faUserLock} /></Button>
    )
}