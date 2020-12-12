import React, { Component } from 'react'
import ContainerWrapper from './components/Container/Container'
import TabControl from './components/TabControls/TabControls'
import PaneList from './components/PaneList/PaneList'
import FormAddItems from './components/FormAddItem/FormAddItem'
import ButtonEditsMenu from './components/ButtonEditMenu/ButtonEditMenu'
import Header from './components/Header/Header'

export default class App extends Component {

  state = {
    data: [],
    filter: "",
    toggle: false

  }

  componentDidMount() {
    if (localStorage.getItem('save_data')) {
      this.setState({
        data: JSON.parse(localStorage.getItem('save_data'))
      })
    }
  }


  toggle = () => this.setState(prevState => ({ toggle: !prevState.toggle }));

  handlerCreateTable = (arr) => {
    this.setState({
      data: [...arr],
    })
    this.toggle()
    localStorage.setItem('save_data', JSON.stringify(arr))
  }

  handlerTabButton = (filter) => {
    console.log(filter)
    this.setState({
      filter
    })
  }

  filterTabItem = () => {
    return this.state.data.filter(item =>
      item.tabName.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    const { data, toggle } = this.state
    const visibleTabList = this.filterTabItem()
    return (
      <>
        {!toggle && <>
          <Header title='Dish Menu' />
          <ContainerWrapper>
            {data.length > 0 && <TabControl data={data} onHandlerButton={this.handlerTabButton} />}
          </ContainerWrapper>
          <ContainerWrapper>
            <PaneList data={visibleTabList} />
          </ContainerWrapper>
          <ContainerWrapper>
            <ButtonEditsMenu title={data.length > 0 ? 'Edit menu' : 'Create Menu'} toggle={this.toggle} />

          </ContainerWrapper>
        </>}

        {toggle && <>
          <ContainerWrapper>
            <FormAddItems onCreateTable={this.handlerCreateTable} data={data} />
          </ContainerWrapper>
        </>}

      </>
    )
  }
}