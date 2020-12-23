import React from 'react'
import { Button, Label, Item, List } from './StyledComponent'



export default function ItemEditors({ arrItems, onDeleteItem, onEditItem }) {
    return (
        <List>
            {arrItems.map(({ imageHref, title, subTitle, description, id }) => (
                <Item key={id}>
                    <p><Label>Slide title:</Label> {title}</p>
                    <p><Label>image href:</Label> {imageHref}</p>
                    <p><Label>sub title:</Label> {subTitle}</p>
                    <p><Label>Description:</Label> {description}</p>
                    <Button className="buttonDeleteItem" onClick={() => onDeleteItem(id)}>delete item</Button>
                    <Button onClick={() => onEditItem(id)}>edit item</Button>
                </Item>
            ))}
        </List>
    )
}

