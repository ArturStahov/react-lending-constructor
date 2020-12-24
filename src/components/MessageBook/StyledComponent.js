import styled from 'styled-components'


const List = styled.ul`
max-height:600px;
width:600px;
margin:0 auto;
display:flex;
flex-wrap:wrap;
justify-content:center;
padding:30px;
overflow-y:scroll;
`
const Item = styled.li`
display:flex;
padding:10px;
width:100%;
background-color:#E7FDBB;
border:2px solid #7FA335;
border-radius:1rem;
transition: background-color 0.3s ease-in-out;
p{
    color:#000000;
}
&:not(:last-child){
    margin-bottom:10px;
}
&:hover,:focus{
    background-color:#8BB92E;
}
`
const Col = styled.div`
width:300px;
&:first-child{
    margin-right:15px;
}
`
const Button = styled.button`
width:50px;
height: 50px;
background-color:transparent;
border:none;
outline:none;
color:#000000;
&:hover{
    color:red;
}
cursor:pointer;
`
const Label = styled.span`
font-size:1.6rem;
font-weight:800;
color :#BCFB3F;
`
const Title = styled.h2`
width:100%;
font-size:2rem;
font-weight:700;
color:#000000;
text-align:center;
margin-bottom:20px;
`
const Container = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;

`
export { Container, Title, Button, Label, Item, List, Col }