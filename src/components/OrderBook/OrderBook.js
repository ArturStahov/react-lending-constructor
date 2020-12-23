import { Button, Label, Item, List, Col } from './StyledComponent'



export default function OrderBook({ orderArr, onDeleteItem }) {


    return (
        <List>
            {orderArr.map(({
                name,
                phone,
                date,
                email,
                number,
                time,
                id }) => (
                    <Item key={id}>
                        <Col>
                            <p><Label>Name:</Label> {name}</p>
                            <p><Label>Phone:</Label> {phone}</p>
                            <p><Label>Email:</Label> {email}</p>
                        </Col>
                        <Col>
                            <p><Label>Date:</Label> {date}</p>
                            <p><Label>Time:</Label> {time}</p>
                            <p><Label>Quality:</Label> {number}</p>
                        </Col>
                        <Button onClick={() => onDeleteItem(id)}>delete item</Button>
                    </Item>
                ))}
        </List>
    )
}