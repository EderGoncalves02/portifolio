import styled from "styled-components";

const col = {
    cor1: "#252726",
    cor2: "#f9f9f8",
    cor3: "#f08d40",
    bla: '#000',
    white: '#fff'
  
  };

export const Container = styled.div`
    background: black;
    border-radius: 15px;
    margin-left: 3%;
    margin-right: 3%;
    padding: 20px;
    box-shadow: black 1px 1px 30px 9px;
`;

export const Content = styled.div`
display: grid;
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

    @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }


  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

`;

export const Job = styled.div`
  border-bottom: solid rgba(240, 141, 64, 0.5);
  box-shadow: ${col.cor1} 1px 1px 8px 1px;
  padding: 25px;
  margin: 0px 10px 20px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  justify-content: center;
  height: 100%;
  width: 80%;
  overflow: hidden;

  @media (max-width: 767px) {
    max-height: none;
    overflow: hidden;
  }

    @media (max-width: 250px) {
    max-height: 100%;
    overflow: hidden;
  }
`;

export const Title = styled.h2`
  color: ${col.cor3};
`;

export const Text = styled.span`
color: ${col.cor3};
font-size: 16px; 
line-height: 1.2; 



`;

export const Tag = styled.span`
background-color: ${col.cor3};
color: ${col.cor2};
padding: 5px 10px;
border-radius: 5px;
width: fit-content; 
margin-right: auto; 

`;

export const Selection =  styled.a`
color: ${col.cor2}; 
text-decoration: none;
padding: 25px;
  margin: 0px 10px 20px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  justify-content: center;
  max-height: 250px;
  overflow: hidden;

&:hover {
  color: ${col.cor3}; 
}
`;


