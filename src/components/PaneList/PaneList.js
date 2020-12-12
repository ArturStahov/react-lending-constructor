import React from 'react';
import { Desc, Title, Item, PaneLists } from './StyledComponent';



export default function PaneList({ data }) {
    return (
        <PaneLists>
            {data.map(({ id, price, title, description }) => (
                <Item key={id} >
                    <Title>{`${title} . . . .${price} USD`}</Title>
                    <Desc>{description}</Desc>
                </Item>
            ))}
        </PaneLists>
    )
}