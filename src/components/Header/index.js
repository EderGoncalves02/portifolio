import React from 'react';
import * as C from './styles';
import Typewriter from "typewriter-effect";

import ProgramadorIcon from '../../Progrador.svg';

export default function Header() {
   

  return (
    <C.Content>

      <C.Header>
        <C.IconWrapper>
          <img src={ProgramadorIcon} alt="Programador Icon" />
        </C.IconWrapper>
        <C.TextWrapper>

          <C.Name>
            Éder Gonçalves Pereira
          </C.Name>

          <C.TypDiv>
            <Typewriter
              options={{
                strings: ['Programador', 'Desenvolvedor Front-End'],
                autoStart: true,
                loop: true,
              }}
            />
          </C.TypDiv>
        </C.TextWrapper>
      </C.Header>
    </C.Content>
  )
}
