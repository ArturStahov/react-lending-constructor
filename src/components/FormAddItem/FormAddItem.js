
import React, { Component } from 'react'
import ItemEditor from './ItemEditor/ItemEditor'
import Notifications from '../Notification/Notification'
import { LabelText, Button, Label, Form, ContentBox, Wrapper } from './StyledComponent'

import uniqid from 'uniqid'
import { InputNumber, Input } from 'antd';
const { TextArea } = Input;





export default class FormAddItems extends Component {

    state = {
        tabName: '',
        title: '',
        price: 0,
        description: '',
        id: null,
        itemArr: [],
        isEdit: false
    }

    componentDidMount() {
        this.setState({
            itemArr: [...this.props.data]
        })
    }



    handlerCreateItem = (e) => {
        e.preventDefault()
        const { tabName, title, price, description, isEdit, id } = this.state
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


    render() {
        const { tabName, title, price, description, itemArr, isEdit } = this.state
        const firstStep = localStorage.getItem('save_data')// проверяем на первый визит
        return (
            <>
                <Wrapper>
                    <Form onSubmit={this.handlerCreateItem}>
                        <Label >
                            <LabelText>input Tab name (max length 25 symbols)</LabelText>
                            <Input name="tabName" value={tabName} maxLength={25} onChange={this.handlerInput} required />
                        </Label>

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
                        {itemArr.length > 0 && <Button className='buttonCreate' onClick={() => this.props.onCreateTable(itemArr)}>{firstStep ? "Update Menu" : "Create Menu"}</Button>}
                    </Form>


                    {itemArr.length > 0
                        ? <ContentBox> <ItemEditor arrItems={itemArr} onDeleteItem={this.deleteItem} onEditItem={this.editItem} /> </ContentBox>
                        : <Notifications message="Create Item for next step!" />
                    }
                </Wrapper>
            </>
        )
    }
}