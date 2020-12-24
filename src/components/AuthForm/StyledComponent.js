import styled from 'styled-components'

const Form = styled.form`
max-width:400px;
margin:0 auto;
display:flex;
flex-wrap:wrap;
justify-content:center;
`
const Input = styled.input`
width:300px;
height:30px;
color: #000;
border:2px solid grey;
border-radius:1rem;
outline:none;
padding-left:5px;
&:not(:last-child){
    margin-bottom:10px;
}
`
const Button = styled.button`
  width: 300px;
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
`
export { Button, Input, Form }