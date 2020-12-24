import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { Button, Label, Item, List, Col, Title, Container } from './StyledComponent'



export default function OrderBook({ messageArr, onDeleteItem }) {


    return (
        <Container>
            <Title>Messages</Title>
            <List>
                {messageArr.map(({
                    name,
                    phone,
                    email,
                    message,
                    id }) => (
                        <Item key={id}>
                            <Col>
                                <p><Label>Name:</Label> {name}</p>
                                <p><Label>Phone:</Label> {phone}</p>
                                <p><Label>Email:</Label> {email}</p>
                            </Col>
                            <Col>
                                <p><Label>Message:</Label> {message}</p>
                            </Col>
                            <Button onClick={() => onDeleteItem(id)}><FontAwesomeIcon size={'2x'} icon={faTrashAlt} /></Button>
                        </Item>
                    ))}
            </List>
        </Container>
    )
}