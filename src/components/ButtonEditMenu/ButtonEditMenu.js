import { Button } from './StyledComponent'


export default function ButtonEditsMenu({ toggle, title }) {
    return (
        <Button onClick={toggle}>{title}</Button>
    )
}