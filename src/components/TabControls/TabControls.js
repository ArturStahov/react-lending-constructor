import React from 'react'
import { Link, Item, ControlList } from './StyledComponent'


export default function TabControls({ data, onHandlerButton }) {
    const uniqItemArr = [...new Set(data.map(e => e.tabName))]

    return (
        <ControlList>
            {uniqItemArr.map((item) => (
                <Item key={item} onClick={() => onHandlerButton(item)}><Link>{item}</Link></Item>
            ))}
        </ControlList>
    )
}

