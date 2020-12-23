
import { Component } from 'react'
import { Input } from 'antd';
import uniqid from 'uniqid'

import { LabelText, Button, Label, Form, Wrapper, ContentBox } from './StyledComponent'
import ItemSlideEditor from './ItemSliderEditor/ItemSliderEditor'
import Notifications from '../Notification/Notification'
const { TextArea } = Input;



export default class FormSliderOption extends Component {

    state = {
        imageHref: '',
        title: '',
        subTitle: '',
        description: '',
        id: null,
        itemArr: [],
        isEdit: false,
    }

    componentDidMount() {
        this.setState({
            itemArr: [...this.props.data]
        })
    }

    handlerSlideCreate = () => {
        const { itemArr } = this.state
        const objectSliderOptions = {
            itemArr,
        }
        this.props.onCreateSlider(objectSliderOptions)
    }

    handlerInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handlerCreateItem = (e) => {
        e.preventDefault()
        const { subTitle, title, description, isEdit, id, imageHref } = this.state

        const create = () => {
            this.setState((prevState) => {
                return {
                    itemArr: [...prevState.itemArr, {
                        imageHref,
                        title,
                        subTitle,
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
                imageHref: '',
                title: '',
                subTitle: '',
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

    render() {
        const { title, subTitle, description, isEdit, itemArr, imageHref } = this.state
        const firstStep = this.props.data.length // проверяем на первый визиn
        return (
            <Wrapper>
                <Form onSubmit={this.handlerCreateItem}>
                    <Label >
                        <LabelText>Slide Image href</LabelText>
                        <Input name="imageHref" value={imageHref} onChange={this.handlerInput} required autoComplete="off" />
                    </Label>
                    <Label >
                        <LabelText>Slide Title (max length 25 symbols)</LabelText>
                        <Input name="title" maxLength={25} value={title} onChange={this.handlerInput} />
                    </Label>

                    <Label >
                        <LabelText>input sub Title</LabelText>
                        <Input name="subTitle" type="text" value={subTitle} onChange={this.handlerInput} />
                    </Label>


                    <Label>
                        <LabelText>Input slide description</LabelText>
                        <TextArea name="description" value={description} onChange={this.handlerInput} />
                    </Label>

                    <Button className='buttonCreateItem' type="submit">{isEdit ? "Save Change" : "Create Item"}</Button>
                    {itemArr.length > 0 && <Button className='buttonCreate' onClick={this.handlerSlideCreate}>{firstStep ? "Update Slider" : "Create Slider"}</Button>}
                </Form>


                {itemArr.length > 0
                    ? <ContentBox> <ItemSlideEditor arrItems={itemArr} onDeleteItem={this.deleteItem} onEditItem={this.editItem} /> </ContentBox>
                    : <Notifications message="Create Item for next step!" />
                }

            </Wrapper>

        )
    }
}