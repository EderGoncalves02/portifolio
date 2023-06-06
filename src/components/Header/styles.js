
import styled from "styled-components";



const col = {
  cor1: "#252726",
  cor2: "#f9f9f8",
  cor3: "#f08d40",
  bla: '#000',
  white: '#fff'

};



export const Name = styled.h1`
  color: ${col.cor2};
  text-align: center;
  margin-top: 60px;
  font-size: 3.5rem;
`;

export const Content = styled.div`

`;

export const TypDiv = styled.div`
    text-align: center;
    font-size: 2.5rem;
`;



export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 160px;
  padding-right: 160px;
  align-content: center;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;

  @media (max-width: 968px) {
    width: 250px;
    height: 250px;
  }
`;


export const TextWrapper = styled.div`
display: blocks;
`;






