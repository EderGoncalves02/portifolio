import React from 'react'
import * as C from './styles'

export default function Arrow() {
  const handleClick = () => {
    const posicaoDesejada = document.getElementById('about').offsetTop - 25;
    const opcoesRolagem = {
      top: posicaoDesejada,
      behavior: 'smooth'
    };
    window.scrollTo(opcoesRolagem);
  };

  return (
    <C.ArrowWrapper>
      <C.ArrowDown onClick={handleClick} />
    </C.ArrowWrapper>
  );
}
