import React from 'react'
import { Containers } from './StyledComponent'



export default function ContainerWrapper({ children }) {
    return (
        <Containers>
            {children}
        </Containers>
    )
}