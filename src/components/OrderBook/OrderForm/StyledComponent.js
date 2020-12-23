import styled from 'styled-components'

const Title = styled.h2`
    font-size:6.6rem;
    font-family:'Kaushan Script';
    text-align: center;
    margin-bottom: 5px;
    &:after {
      content: '';
      display: block;
      width: 60px;
      border-bottom: 5px solid #e8c300;
      border-radius: 1rem;
      margin: 15px auto 18px;
    }
`
const Form = styled.form`
  width: 590px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const FormGroup = styled.div`
width: 277px;
margin-bottom: 10px;
&:first-child{
     margin-right: 10px;
}
`
const Input = styled.input`
   width: 100%;
    height: 60px;
    background-color: #e5e5e5;
    border: none;
    border-radius: 0.5rem;
    padding-left: 20px;
    padding-right: 20px;
    color:#000000;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &::placeholder {
        font-size:1.4rem;
        color: rgba(51, 51, 51, 0.5)
    }
`
const Button = styled.button`
    width: 96%;
    height: 60px;
    font-size:1.2rem;
    font-weight:700;
    color:#ffffff;
    text-transform: uppercase;
    border: none;
    border-radius: 0.5rem;
    background-color: #e8c300;
    transition-property: background-color, border, color;
    transition-duration: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      border: 1px solid rgba(51, 51, 51, 0.5);
      color: rgba(51, 51, 51, 0.5);
    }
`
export { Button, Input, FormGroup, Form, Title }