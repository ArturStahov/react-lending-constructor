import styled from 'styled-components'

const Modal = styled.div`
width:20%;
padding:100px 20px 0px 20px;
height:100vh;
background-color:#F19800;
position:fixed;
right:0;
top:0;
z-index:99;
`
const ButtonClose = styled.button`
display:flex;
justify-content:center;
align-items:center;
  width:50px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: -8px;
  background-color: #BF3030;
  border:none;
 
 clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
 
  transition:transform 0.4s ease-in-out;
  z-index:99;
  outline:none;
  cursor: pointer;
  
      &:hover{
          background-color:#FF4040;
          transform:translateX(5px);
      } 
`
const ButtonLogOut = styled.button`
display:flex;
justify-content:center;
align-items:center;
  width:50px;
  height: 30px;
  position: absolute;
  top: 50px;
  left: -8px;
  background-color: #BF3030;
  border:none;
 
 clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
 
  transition:transform 0.4s ease-in-out;
  z-index:99;
  outline:none;
  cursor: pointer;
  
      &:hover{
          background-color:#FF4040;
          transform:translateX(5px);
      } 
`
const Button = styled.a`
display:flex;
justify-content:center;
align-items:center;
  width: 250px;
  height: 30px;
  border: 1px solid #ffffff;
  border-radius: 0.5rem;
  font-size:1.2rem;
  font-weight:700;
  color:#ffffff;
  text-transform: uppercase;
  background-color: transparent;
  transition-property: background-color;
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover,
  :focus {
    background-color:#e8c300;
    border: none;
  }
  margin-bottom:20px;
  `

export { ButtonClose, Modal, ButtonLogOut, Button }