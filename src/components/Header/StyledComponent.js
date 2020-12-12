import styled from 'styled-components'

const Header = styled.header`
max-width:1280px;
margin:0 auto;
`
const Title = styled.h2`
    font-size:6.5rem; 
    font-family:'Kaushan Script';
    text-align: center;
    margin-bottom: 15px;
    &:after {
      content: '';
      display: block;
      width: 60px;
      border-bottom: 5px solid #e8c300;
      border-radius: 1rem;
      margin: 20px auto 30px;
    }
`
export { Header, Title }
