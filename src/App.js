import Header from "./components/Header";
import './app.css'
import * as C from './styles'
import Arrow from "./components/Arrow";
import AboutMe from "./components/AboutMe";
import Repos from "./components/Repos";

function App() {
  const handleScrollToAbout = () => {
    const posicaoDesejada = document.getElementById('about').offsetTop;
    const opcoesRolagem = {
      top: posicaoDesejada,
      behavior: 'smooth'
    };
    window.scrollTo(opcoesRolagem);
  };

  return (
    <C.Container>  
      <C.FirstView>
        <Header/>
        <Arrow onClick={handleScrollToAbout} />
      </C.FirstView>
      <C.Content id="about">
        <AboutMe />
        <C.Space/>
        <C.Text> Projetos </C.Text>
        <C.Space/>
        <Repos/>
      </C.Content>
    </C.Container>   
  );
}

export default App;
