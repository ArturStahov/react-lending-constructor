import { useState, useContext } from 'react'

import Container from './components/Container/Container'
import TabControl from './components/Menu/TabControls/TabControls'
import PaneList from './components/Menu/PaneList/PaneList'
import FormAddItems from './components/FormAddItem/FormAddItem'
import ButtonEditsMenu from './components/ButtonEditMenu/ButtonEditMenu'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import RenderPortal from './components/RenderPortal'
import Slider from './components/Slider/Slider'
import FormSliderOptions from './components/FormSliderOptions/FormSliderOptions'
import ButtonEditSlider from './components/buttonEditSlider/ButtonEditSlider'
import AuthModal from './components/AuthModal/AuthModal'
import AuthForms from './components/AuthForm/AuthForm'
import AuthButton from './components/AuthButton/AuthButton'
import authContext from './Utils//Context';
import OrderForm from './components/OrderBook/OrderForm/OrderForm'
import OrderBook from './components/OrderBook/OrderBook'

export default function App() {

  //  objectMenu = {    выд обекта в dataMenu там всегда 1 обект эго можна дополнить и отправить на сервер
  //   options: {
  //     menuName,
  //     firstActiveTab
  //   },
  //   itemArr,
  // }
  const [dataMenu, setDataMenu] = useState([])
  const [dataSlider, setDataSlider] = useState([])
  const [filterMenuTab, setFilterMenuTab] = useState("")
  const [toggleTabEditor, setToggleTabEditor] = useState(false)
  const [toggleSliderEditor, setToggleSliderEditor] = useState(false)
  const [toggleAuthModal, setToggleAuthModal] = useState(false)
  const [toggleBoardOrders, setToggleBoardOrders] = useState(false)
  const [menuName, setMenuName] = useState('')
  const { userID, isLoggedIn, onLogOut } = useContext(authContext);
  const [ordersArr, setOrdersArr] = useState([])

  // //забырать с бекенда тут
  // componentDidMount() {
  //   // if (localStorage.getItem('save_data')) {
  //   //   this.setState({
  //   //     data: JSON.parse(localStorage.getItem('save_data'))
  //   //   })
  //   // }
  // }



  const toggleTabMenu = () => setToggleTabEditor(prevToggle => !prevToggle);
  const toggleSliderMenu = () => setToggleSliderEditor(prevToggle => !prevToggle);
  const toggleAuthModals = () => setToggleAuthModal(prevToggle => !prevToggle);
  const toggleOrdersModals = () => setToggleBoardOrders(prevToggle => !prevToggle);

  // componentDidUpdate(prevState, prevProps) {
  //   // сдесь отправить данные на сервер
  //   //по проверке если обновили масив dataMenu
  //   // обеденить в этом методе все обекты от плагинов
  //   //в один обект для отправки на бек
  //   // 
  // }


  const handlerDishSlider = (objectSlider) => {
    setDataSlider([...objectSlider.itemArr])
    toggleSliderMenu()
  }

  const handlerCreateTable = (objectMenu) => {
    setDataMenu([...objectMenu.itemArr])
    setMenuName(objectMenu.options.menuName)
    setFilterMenuTab(objectMenu.options.firstActiveTab)
    toggleTabMenu()
  }

  const handlerTabButton = (filterMenuTab) => {
    setFilterMenuTab(filterMenuTab)
  }

  const filterTabItem = () => {
    return dataMenu.filter(item =>
      item.tabName.toLowerCase().includes(filterMenuTab.toLowerCase()),
    );
  };

  const handlerOrderForm = (objOrder) => {
    setOrdersArr(prevArr => [...prevArr, objOrder])
  }
  const handlerDeleteOrder = (id) => {

    setOrdersArr(prev => prev.filter(e => e.id !== id))
  }


  const visibleTabList = filterTabItem()
  return (
    <>
      {/* ================AuthModal============== */}
      <RenderPortal domID='#root-admin'>
        <>
          <AuthButton toggle={toggleAuthModals} />
          {toggleAuthModal && <AuthModal close={toggleAuthModals}
            onLogOut={onLogOut}
            isLogIn={isLoggedIn}
            onEditSlider={toggleSliderMenu}
            onEditMenu={toggleTabMenu}
            onViewOrders={toggleOrdersModals}
          >
            {!isLoggedIn && < AuthForms />}
          </AuthModal>}
        </>
      </RenderPortal>
      {/* ======Order-book================= */}
      <RenderPortal domID='#order-book-root'>
        <>
          <OrderForm onSubmit={handlerOrderForm} />
        </>
      </RenderPortal>
      {/* ======Slider================= */}
      <RenderPortal domID='#slider-root'>
        <>
          {isLoggedIn && <ButtonEditSlider title='Edit Slider' toggle={toggleSliderMenu} />}
          {!toggleSliderEditor && <Slider itemArr={dataSlider} />}
        </>
      </RenderPortal>
      {/* ======dish Menu================= */}
      {
        !toggleTabEditor && <>
          <Header title={menuName} />
          <Container>
            {dataMenu.length > 0 && <TabControl data={dataMenu} onHandlerButton={handlerTabButton} />}
          </Container>
          <Container>
            <PaneList data={visibleTabList} />
          </Container>
          <Container>
            {isLoggedIn && <ButtonEditsMenu title={dataMenu.length > 0 ? 'Edit menu' : 'Create Menu'} toggle={toggleTabMenu} />}
          </Container>
        </>
      }
      {/* ======dish Menu End================= */}

      {
        toggleTabEditor && (
          <Modal onCloseModal={toggleTabMenu}>
            <Container>
              <FormAddItems onCreateTable={handlerCreateTable} data={dataMenu} />
            </Container>
          </Modal>
        )
      }
      {
        toggleSliderEditor && (
          <Modal onCloseModal={toggleSliderMenu}>
            <Container>
              <FormSliderOptions onCreateSlider={handlerDishSlider} data={dataSlider} />
            </Container>
          </Modal>
        )
      }
      {
        toggleBoardOrders && (
          <Modal onCloseModal={toggleOrdersModals}>
            <Container>
              <OrderBook orderArr={ordersArr} onDeleteItem={handlerDeleteOrder} />
            </Container>
          </Modal>
        )
      }
    </>
  )

}