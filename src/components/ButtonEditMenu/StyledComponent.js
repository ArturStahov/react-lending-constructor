import styled from 'styled-components'


const Button = styled.button`
  width: 200px;
  height: 60px;
  border: 1px solid $border-color;
  border-radius: 0.5rem;
  font-size:1.2rem;
  font-weight:700;
  color:#000000;
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