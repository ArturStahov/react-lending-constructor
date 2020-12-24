import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom:20px;
`
const FormBox = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`

const Input = styled.input`
    width: 420px;
    height: 60px;
    background-color: #e5e5e5;
    border: none;
    border-radius: 0.5rem;
    padding-left: 20px;
    padding-right: 20px;

    &:not(:last-child) {
      margin-right: 10px;
    }
    &::placeholder {
      font-size:1.4rem;
      color:rgba(51, 51, 51, 0.5);
    }
`
const TextArea = styled.textarea`
    width: 100%;
    height: 120px;
    background-color: #e5e5e5;
    border: none;
    border-radius: 0.5rem;
    padding: 20px;
    resize: none;
    margin-bottom: 10px;
`
const Button = styled.button`
    width: 640px;

    font-size:1.2rem;
    font-weight:700;
    color:#fff;
    text-transform: uppercase;
    height: 60px;
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

export { Button, TextArea, Input, FormBox, Form }