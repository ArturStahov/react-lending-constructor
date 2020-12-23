import { useState, useContext } from 'react'
import styled from 'styled-components'


import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

import FetchAuthApi from '../../Utils/FetchAutchApi'
import authContext from '../../Utils/Context';

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


export default function AuthForms() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { onLogIn } = useContext(authContext);


    const handlerInput = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        FetchAuthApi(email, password)
            .then(data => {
                if (!data) return;
                const userId = data.localId;
                onLogIn(userId)
            })
            .catch(err => {

                error({
                    title: "Oops,sorry",
                    text: err,
                    delay: 3000
                });

            })
    }





    return (
        <Form onSubmit={handlerSubmit}>
            <Input value={email} onChange={handlerInput} type="email" name="email" placeholder="input email" required />
            <Input value={password} onChange={handlerInput} type="password" name="password" placeholder="input password" required />
            <Button type="submit">Log in</Button>
        </Form>
    )

}