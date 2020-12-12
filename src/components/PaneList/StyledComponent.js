import styled from 'styled-components';

const PaneLists = styled.ul`
width: 100%;
max-height:500px;
padding-bottom:50px;
`
const Item = styled.li`
 max-width: 300px;
 margin-right:70px;
 cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &:hover,
    :focus {
      &:after {
        content: '';
        display: block;
        width: 100%;
        outline: 2px solid #e8c300;
      }
    }
`
const Title = styled.h3`
    font-size:1.1rem;
    line-height:1.2;
    font-weight:700;
    color:#000000;
    text-transform: uppercase;
`
const Desc = styled.p`
font-size:1.1rem;
    line-height:1.2;
    font-weight:400;
    color:#000000;    
`
export { Desc, Title, Item, PaneLists }