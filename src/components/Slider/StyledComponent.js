import styled from 'styled-components'


const SliderWrapper = styled.div`
    max-width:1280px;
    margin:0 auto;
`
const SlideItem = styled.div`
    position:relative;  
    display: flex;
    justify-content: center;
`
const ImageBox = styled.div`
     position: relative;
    width: 475px;
    height: 475px;
    margin-right: 50px;
    filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.5));
`
const ImageDecor = styled.div`
    width: 250px;
    height: 250px;
    border: 20px solid #e8c300;
    border-radius: 0.5rem;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: -25%;
    transform: translateY(-50%);
    z-index:99;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
   
`
const ContentBox = styled.div`
    max-width: 513px;
    padding: 5px 0px 100px 0px;
`
const Title = styled.h2`
    font-size:6.6rem;
    color:#fff;
    font-family: 'Kaushan Script';
    text-align: center;
    margin-bottom: 5px;
    &:after {
      content: "";
      display: block;
      width: 60px;
      border-bottom: 5px solid #e8c300;
      border-radius: 1rem;
      margin: 15px auto 18px;
    }
`
const SubTitle = styled.p`
    font-size:2rem;
    color:#fff;
    font-weight:700;
    text-align: center;
    margin-bottom: 20px;
`
const Description = styled.p`
    font-size:1.6rem;
    color:#fff;
    text-align: center;
`
export { Description, SubTitle, Title, ContentBox, Image, ImageDecor, ImageBox, SlideItem, SliderWrapper }