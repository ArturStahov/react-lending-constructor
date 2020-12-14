import React, { Component } from 'react'

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


export default class App extends Component {

  //  objectMenu = {    выд обекта в dataMenu там всегда 1 обект эго можна дополнить и отправить на сервер
  //   options: {
  //     menuName,
  //     firstActiveTab
  //   },
  //   itemArr,
  // }

  state = {
    dataMenu: [],
    dataSlider: [],
    filterMenuTab: "",
    toggleTabEditor: false,
    toggleSliderEditor: false,
    menuName: ''
  }

  // //забырать с бекенда тут
  // componentDidMount() {
  //   // if (localStorage.getItem('save_data')) {
  //   //   this.setState({
  //   //     data: JSON.parse(localStorage.getItem('save_data'))
  //   //   })
  //   // }
  // }



  toggleTabMenu = () => this.setState(prevState => ({ toggleTabEditor: !prevState.toggleTabEditor }));
  toggleSliderMenu = () => this.setState(prevState => ({ toggleSliderEditor: !prevState.toggleSliderEditor }));

  // componentDidUpdate(prevState, prevProps) {
  //   // сдесь отправить данные на сервер
  //   //по проверке если обновили масив dataMenu
  //   // обеденить в этом методе все обекты от плагинов
  //   //в один обект для отправки на бек
  //   // 
  // }


  handlerDishSlider = (objectSlider) => {
    console.log(objectSlider)
    this.toggleSliderMenu()
  }

  handlerCreateTable = (objectMenu) => {
    this.setState({
      dataMenu: [...objectMenu.itemArr],
      menuName: objectMenu.options.menuName,
      filterMenuTab: objectMenu.options.firstActiveTab
    })
    this.toggleTabMenu()
  }

  handlerTabButton = (filterMenuTab) => {
    this.setState({
      filterMenuTab
    })
  }

  filterTabItem = () => {
    return this.state.dataMenu.filter(item =>
      item.tabName.toLowerCase().includes(this.state.filterMenuTab.toLowerCase()),
    );
  };

  render() {
    const { dataMenu, toggleTabEditor, toggleSliderEditor, menuName, dataSlider } = this.state
    const visibleTabList = this.filterTabItem()
    return (
      <>
        <RenderPortal domID='#slider-root'>
          <>
            <ButtonEditSlider title='Edit Slider' toggle={this.toggleSliderMenu} />
            <Slider />
          </>

        </RenderPortal>
        {/* ======dish Menu================= */}
        {
          !toggleTabEditor && <>
            <Header title={menuName} />
            <Container>
              {dataMenu.length > 0 && <TabControl data={dataMenu} onHandlerButton={this.handlerTabButton} />}
            </Container>
            <Container>
              <PaneList data={visibleTabList} />
            </Container>
            <Container>
              <ButtonEditsMenu title={dataMenu.length > 0 ? 'Edit menu' : 'Create Menu'} toggle={this.toggleTabMenu} />
            </Container>
          </>
        }
        {/* ======dish Menu End================= */}


        {
          toggleTabEditor && (
            <Modal onCloseModal={this.toggleTabMenu}>
              <Container>
                <FormAddItems onCreateTable={this.handlerCreateTable} data={dataMenu} />
              </Container>
            </Modal>
          )
        }
        {
          toggleSliderEditor && (
            <Modal onCloseModal={this.toggleSliderMenu}>
              <Container>
                <FormSliderOptions onCreateSlider={this.handlerDishSlider} data={dataSlider} />
              </Container>
            </Modal>
          )
        }
      </>
    )
  }
}