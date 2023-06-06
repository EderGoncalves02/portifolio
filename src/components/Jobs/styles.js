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
 
`;

export const Job = styled.div`
   
    padding: 25px;
`;

export const Title = styled.h2`
  color: ${col.cor3};
  
  font-size:3.5rem;


  @media (max-width: 968px) {
    font-size:2.5rem;
  }
`;

export const Text = styled.h3`
  color: ${col.cor3};
  font-size:2.5rem;
  
  margin-top: 95px;

  @media (max-width: 968px) {
    font-size:1.5rem;
  }
`;
