import styled,{keyframes} from "styled-components";
import { TfiAngleDoubleDown } from 'react-icons/tfi';

const col = {
    cor1: "#252726",
    cor2: "#f9f9f8",
    cor3: "#f08d40",
    bla: '#000',
    white: '#fff'
  
  };

  export const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ArrowDown = styled(TfiAngleDoubleDown)`
  font-size: 40px;
  color: ${col.cor3};
  animation: ${bounceAnimation} 2s infinite;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ArrowButton = styled.a`
  
`;
