import styled from 'styled-components'


const List = styled.ul`
max-width:700px;
margin:0 auto;
display:flex;
flex-wrap:wrap;
justify-content:center;
`
const Item = styled.li`
padding:10px;
width:500px;
background-color:#E7FDBB;
border:2px solid #7FA335;
border-radius:1rem;
transition: background-color 0.3s ease-in-out;
&:not(:last-child){
    margin-bottom:10px;
}
&:hover,:focus{
    background-color:#8BB92E;
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
&.buttonDeleteItem{
    background-color:grey;
    margin-right:10px;
}
`
const Label = styled.span`
font-size:1.6rem;
font-weight:800;
color :#BCFB3F;
`

export { Button, Label, Item, List }