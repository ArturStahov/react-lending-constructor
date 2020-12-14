import { Button } from './StyledComponent'


export default function ButtonEditsSlider({ toggle, title }) {
    return (
        <Button onClick={toggle}>{title}</Button>
    )
}