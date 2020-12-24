import { useState } from 'react'
import uniqid from 'uniqid'
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { Button, TextArea, Input, FormBox, Form } from './StyledComponent'

export default function MessageForms({ onSubmit }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlerInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                return;
        }
    }

    const handlerFormSubmit = (e) => {
        e.preventDefault()
        const messageObj = {
            name,
            phone,
            email,
            message,
            id: uniqid()
        }
        onSubmit(messageObj)
        info({
            title: "Success!",
            text: "Thanks for feedback!",
            delay: 3000
        });
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    }

    return (
        <>
            <Form onSubmit={handlerFormSubmit}>
                <FormBox>
                    <Input onChange={handlerInput} value={name} type="text" name="name" placeholder="Name" minLength="2" maxLength="20" required />
                    <Input onChange={handlerInput} value={phone} type="text" name="phone" placeholder="Phone" minLength="2" maxLength="50" required />
                    <Input onChange={handlerInput} value={email} type="email" name="email" placeholder="Email" minLength="2" maxLength="50" required />
                </FormBox>
                <TextArea onChange={handlerInput} value={message} name="message" minLength="2" maxLength="250" required />
                <Button type="submit">SEND MESSAGE</Button>
            </Form>
        </>
    )
}