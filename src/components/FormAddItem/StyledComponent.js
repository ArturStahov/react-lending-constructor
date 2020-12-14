import styled from 'styled-components'

const Wrapper = styled.div`
position:relative;
padding-top: 50px;
padding-bottom:50px;
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
`
const ContentBox = styled.div`
max-height:400px;
padding:30px;
overflow-y:scroll;
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
const LabelMenuName = styled.div`
width:100%;
margin:0 auto 30px;
display:flex;
justify-content:center;
`

export { LabelMenuName, LabelText, Button, Label, Form, ContentBox, Wrapper }