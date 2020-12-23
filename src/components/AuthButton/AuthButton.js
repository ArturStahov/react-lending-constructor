import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'


const Button = styled.button`
width:30px;
height: 30px;
background-color:transparent;
border:none;
outline:none;
position:absolute;
top:5%;
right:2%;
cursor:pointer;
&:hover{
    color:yellow;
}
`

export default function AuthButton({ toggle }) {
    return (
        <Button type='button' onClick={() => toggle()}><FontAwesomeIcon icon={faUserLock} /></Button>
    )
}