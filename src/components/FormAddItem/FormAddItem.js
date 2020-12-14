
import React, { Component } from 'react'
import ItemEditor from './ItemEditor/ItemEditor'
import Notifications from '../Notification/Notification'
import Select from './Select/Select'
import { LabelText, Button, Label, Form, ContentBox, Wrapper, LabelMenuName } from './StyledComponent'

import uniqid from 'uniqid'
import { InputNumber, Input } from 'antd';
const { TextArea } = Input;






export default class FormAddItems extends Component {

    state = {
        menuName: "Dish Menu",
        tabName: '',
        title: '',
        price: 0,
        description: '',
        id: null,
        itemArr: [],
        isEdit: false,
        firstActiveTab: ""
    }

    componentDidMount() {
        this.setState({
            itemArr: [...this.props.data]
        })
    }


    handlerMenuCreate = () => {
        const { itemArr, menuName, firstActiveTab } = this.state
        const objectMenu = {
            options: {
                menuName,
                firstActiveTab: firstActiveTab ? firstActiveTab : itemArr[0].tabName
            },
            itemArr,
        }
        this.props.onCreateTable(objectMenu)
    }

    handlerCreateItem = (e) => {
        e.preventDefault()
        const { tabName, title, price, description, isEdit, id } = this.state
        if (!tabName) {
            console.error('Create or Add Tab Name')
            return;
        }
        const create = () => {
            this.setState((prevState) => {
                return {
                    itemArr: [...prevState.itemArr, {
                        tabName,
                        title,
                        price,
                        description,
                        id: uniqid(),
                    }]
                }
            })
        }
        const edit = () => {
            //удаляем с таким ид итем и записуем отредактированный
            this.setState({
                itemArr: this.state.itemArr.filter(e => e.id !== id)
            })
            create();
        }
        const clearState = () => {
            this.setState({
                tabName: '',
                title: '',
                price: 0,
                description: '',
                id: null,
                isEdit: false
            })
        }
        isEdit
            ? edit()
            : create()
        clearState();
    }

    deleteItem = (id) => {
        this.setState({
            itemArr: this.state.itemArr.filter(e => e.id !== id)
        })
    }

    // метод обрабатует нажатие на кнопку редактировать итем в листе и выводит в форму значение для редактирования
    editItem = (id) => {
        let itemEdit = this.state.itemArr.find(e => e.id === id)
        this.setState({
            ...itemEdit,
            isEdit: true
        })
    }

    handlerInputNumber = (value) => {
        this.setState({
            price: value
        })
    }

    handlerInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    /**
     * @param {string} value this select UI value
     * @see state.firstActiveTab
     */
    handleSelectFirstActiveTab = (value) => {
        this.setState({
            firstActiveTab: value
        })
    }
    handlerSelectTabNameForAddItem = (value) => {
        this.setState({
            tabName: value
        })
    }


    render() {
        const { tabName, title, price, description, itemArr, isEdit, menuName } = this.state
        const firstStep = this.props.data.length // проверяем на первый визиn
        return (
            <>
                <Wrapper>
                    <LabelMenuName  >
                        <div>
                            <LabelText>input Menu name (max length 25 symbols)</LabelText>
                            <Input name="menuName" value={menuName} style={{ width: 300 }} maxLength={25} onChange={this.handlerInput} />
                        </div>
                    </LabelMenuName >

                    <Form onSubmit={this.handlerCreateItem}>
                        <Label >
                            <LabelText>Create New Tab name (max length 25 symbols)</LabelText>
                            <Input name="tabName" value={tabName} maxLength={25} onChange={this.handlerInput} />
                        </Label>
                        <Select itemArr={itemArr} onHandlerSelect={this.handlerSelectTabNameForAddItem} title='Select Tab for add item or create new' placeholder="Select" />
                        <Label >
                            <LabelText>input title dish</LabelText>
                            <Input name="title" type="text" value={title} onChange={this.handlerInput} required />
                        </Label>

                        <Label>
                            <LabelText>Input price</LabelText>
                            <InputNumber defaultValue={0} min={1} value={price} onChange={this.handlerInputNumber} required />
                        </Label>
                        <Label>
                            <LabelText>Input dish description</LabelText>
                            <TextArea value={description} name="description" onChange={this.handlerInput} required />
                        </Label>

                        <Button className='buttonCreateItem' type="submit">{isEdit ? "Save Change" : "Create Item"}</Button>
                        {itemArr.length > 0 && <Button className='buttonCreate' onClick={this.handlerMenuCreate}>{firstStep ? "Update Menu" : "Create Menu"}</Button>}
                    </Form>



                    {itemArr.length > 0
                        ? <ContentBox> <ItemEditor arrItems={itemArr} onDeleteItem={this.deleteItem} onEditItem={this.editItem} /> </ContentBox>
                        : <Notifications message="Create Item for next step!" />
                    }
                    <Select itemArr={itemArr} onHandlerSelect={this.handleSelectFirstActiveTab} title='Select first active Tab' placeholder='first Tab name' />

                </Wrapper>
            </>
        )
    }
}