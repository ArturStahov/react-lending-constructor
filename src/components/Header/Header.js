import React from 'react'
import { Header, Title } from './StyledComponent'



export default function Headers({ title }) {

    return (
        <Header>
            <Title>{title}</Title>
        </Header>
    )
}