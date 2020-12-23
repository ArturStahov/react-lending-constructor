
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { ButtonClose, Modal, ButtonLogOut, Button } from './StyledComponent'



export default function AuthModal({ children, close, onLogOut, isLogIn, onEditSlider, onEditMenu, onViewOrders }) {


    return (
        <Modal>
            <ButtonClose type='button' onClick={() => close()}> <FontAwesomeIcon icon={faTimes} /></ButtonClose>
            {isLogIn &&
                <>
                    <ButtonLogOut type='button' onClick={() => onLogOut()}> <FontAwesomeIcon icon={faPowerOff} /></ButtonLogOut>
                    <Button onClick={() => onEditSlider()} href='#gallerie'>Edit Slider</Button>
                    <Button onClick={() => onEditMenu()} href='#menu'>Edit Menu</Button>
                    <Button onClick={() => onViewOrders()} href='#booking'>View Orders</Button>
                </>
            }

            {children}
        </Modal>
    )

}