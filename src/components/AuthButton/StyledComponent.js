import styled from 'styled-components'

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

export { Button }