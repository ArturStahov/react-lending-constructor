import styled from 'styled-components';



const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index:99;
`;
const ContentBlock = styled.div`
  position: relative;
  background-color:#fff;
  height: 90%;
  width: 90%;
`;
const ButtonClose = styled.button`
display:flex;
justify-content:center;
align-items:center;
  width:30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  border: 2px solid grey;
  border-radius: 50%;
  transition:transform 0.4s ease-in-out;
  z-index:99;
  cursor: pointer;
  
      &:hover{
          background-color:grey;
          transform:rotate(45deg);
      }
  
  
`;

export { Modal, ContentBlock, ButtonClose };
