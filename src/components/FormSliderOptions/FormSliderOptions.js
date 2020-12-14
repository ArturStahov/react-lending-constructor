
import { Component } from 'react'
import styled from 'styled-components'
import { Input } from 'antd';
import uniqid from 'uniqid'

const { TextArea } = Input;



const Wrapper = styled.div`
position:relative;
padding-top: 50px;
padding-bottom:50px;
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
`
const Form = styled.form`
width:400px;
margin-bottom:50px;
`
const Label = styled.div`
margin-bottom: 10px;
`

const Button = styled.button`
width:150px;
height: 40px;
background-color:green;
border-radius:1rem;
border:2px solid #000000;
color:#fff;
font-size:1.4rem;
text-transform:uppercase;
font-weight:600;
cursor:pointer;
&.buttonCreate{
    background-color:red;
}
&.buttonCreateItem{
    margin-right:10px;
}
`
const LabelText = styled.p`
margin-bottom: 4px;
font-size:1.4rem;
font-weight:800;
color :#8BB92E;
`

export default class FormSliderOption extends Component {

    state = {
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
        const { subTitle, title, description, isEdit, id } = this.state

        const create = () => {
            this.setState((prevState) => {
                return {
                    itemArr: [...prevState.itemArr, {
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

    render() {
        const { title, subTitle, description, isEdit, itemArr } = this.state
        const firstStep = this.props.data.length // проверяем на первый визиn
        return (

            <Wrapper>

                <Form onSubmit={this.handlerCreateItem}>
                    <Label >
                        <LabelText>Slide Title (max length 25 symbols)</LabelText>
                        <Input name="title" maxLength={25} value={title} onChange={this.handlerInput} />
                    </Label>

                    <Label >
                        <LabelText>input sub Title</LabelText>
                        <Input name="subTitle" type="text" value={subTitle} onChange={this.handlerInput} required />
                    </Label>


                    <Label>
                        <LabelText>Input slide description</LabelText>
                        <TextArea name="description" value={description} onChange={this.handlerInput} required />
                    </Label>

                    <Button className='buttonCreateItem' type="submit">{isEdit ? "Save Change" : "Create Item"}</Button>
                    {itemArr.length > 0 && <Button className='buttonCreate' onClick={this.handlerSlideCreate}>{firstStep ? "Update Slider" : "Create Slider"}</Button>}
                </Form>




            </Wrapper>

        )
    }
}