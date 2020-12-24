import { useState } from 'react'
import uniqid from 'uniqid'
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { Button, Input, FormGroup, Form, Title } from './StyledComponent'


export default function OrderForms({ onSubmit }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('2');
    const [time, setTime] = useState('');

    const handlerInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'number':
                setNumber(value);
                break;
            case 'time':
                setTime(value);
                break;
            default:
                return;
        }
    }

    const handlerFormSubmit = (e) => {
        e.preventDefault()
        const orderObj = {
            name,
            phone,
            date,
            email,
            number,
            time,
            id: uniqid()
        }
        onSubmit(orderObj)
        info({
            title: "Success!",
            text: "Wait for a call",
            delay: 3000
        });
        setName('');
        setPhone('');
        setDate('');
        setEmail('');
        setTime('');
        setNumber('2')
    }

    return (
        <>
            <Title>Book a table</Title>
            <Form onSubmit={handlerFormSubmit}>
                <FormGroup>
                    <Input value={name} onChange={handlerInput} type="text" name="name" placeholder="Name" min="2" max="50" autoComplete='off' required />
                    <Input value={phone} onChange={handlerInput} type="text" name="phone" placeholder="Phone" min="2" max="50" autoComplete='off' required />
                    <Input value={date} onChange={handlerInput} type="date" name="date" min="2" max="50" required />
                </FormGroup>
                <FormGroup>
                    <Input value={email} onChange={handlerInput} type="email" name="email" placeholder="Email" min="2" max="50" required />
                    <Input value={number} onChange={handlerInput} type="number" name="number" placeholder="People" min="2" max="50"
                        autoComplete='off' required />
                    <Input value={time} onChange={handlerInput} type="time" name="time" required />
                </FormGroup>
                <Button type="submit">BOOK NOW</Button>
            </Form>
        </>
    )
}