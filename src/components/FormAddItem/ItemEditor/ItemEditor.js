import React from 'react'
import { Button, Label, Item, List } from './StyledComponent'



export default function ItemEditors({ arrItems, onDeleteItem, onEditItem }) {
    return (
        <List>
            {arrItems.map(({ tabName, title, price, description, id }) => (
                <Item key={id}>
                    <p><Label>Tab name:</Label> {tabName}</p>
                    <p><Label>Title dish:</Label> {title}</p>
                    <p><Label>Price:</Label> {price}</p>
                    <p><Label>Description:</Label> {description}</p>
                    <Button className="buttonDeleteItem" onClick={() => onDeleteItem(id)}>delete item</Button>
                    <Button onClick={() => onEditItem(id)}>edit item</Button>
                </Item>
            ))}
        </List>
    )
}

