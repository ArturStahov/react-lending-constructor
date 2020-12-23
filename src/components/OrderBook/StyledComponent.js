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
width:75px;
height: 30px;
background-color:green;
border-radius:1rem;
border:2px solid #000000;
color:#fff;
font-size:1rem;
text-transform:uppercase;
font-weight:600;
cursor:pointer;

`
const Label = styled.span`
font-size:1.6rem;
font-weight:800;
color :#BCFB3F;
`

export { Button, Label, Item, List, Col }