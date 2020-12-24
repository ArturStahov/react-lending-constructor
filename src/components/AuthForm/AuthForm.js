import { useState, useContext } from 'react'
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { Button, Input, Form } from './StyledComponent'
import FetchAuthApi from '../../Utils/FetchAutchApi'
import authContext from '../../Utils/Context';


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
            .then(response => {
                if (!response.ok) {
                    error({
                        title: "Oops,sorry",
                        text: 'The username or password you entered is incorrect. Try again!',
                        delay: 3000
                    });
                    return
                }
                return response.json();
            })
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
            <Input value={password} onChange={handlerInput} type="password" name="password" placeholder="input password" autoComplete='off' required />
            <Button type="submit">Log in</Button>
        </Form>
    )

}