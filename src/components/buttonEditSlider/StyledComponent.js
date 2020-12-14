import styled from 'styled-components'


const Button = styled.button`
  width: 200px;
  height: 60px;
  position:absolute;
  bottom:10%;
  left:50%;
  z-index:50;
  transform:translateX(-50%);
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
`
export { Button }