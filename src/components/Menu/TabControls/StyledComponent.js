import styled from 'styled-components'


const ControlList = styled.ul`

    max-width: 850px;
    margin: 0 auto 50px;
    display: flex;
    justify-content: center;
  
`
const Item = styled.li`
    background-color: transparent;
    transition-property: color, background-color;
    transition-duration: 0.3s;
    border-right: 1px solid rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    cursor:pointer;
    &:hover {
      background-color: #ffd600;
    }
    &:hover>a{
      color:#fff;
      font-weight:700;
    }
    &:last-child {
      border-right: none;
    }

`
const Link = styled.a`
    font-size:1.6rem;
    line-height:1.2;
    font-weight:600;
    color:#000000;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`
export { Link, Item, ControlList }