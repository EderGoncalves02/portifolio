import React,{useEffect, useState} from 'react'
import * as C from './styles'
import axios from 'axios'


export default function Repos() {

  const [repo, setRepo] = useState([])

  const getRepo = async () => {
    try {
      const res = await axios.get('https://api.github.com/users/edergoncalves02/repos');
      const data = res.data;
      setRepo(data);
  
      // Fazer outra requisição para obter as informações de linguagens
      const languagesPromises = data.map(async (repo) => {
        const repoRes = await axios.get(repo.languages_url);
        const repoData = repoRes.data;
        repo.languages = Object.keys(repoData); // Adicionar as linguagens ao objeto do repositório
      });
  
      await Promise.all(languagesPromises); // Aguardar todas as requisições serem concluídas
  
      // Atualizar o estado com os dados atualizados
      setRepo(data);
    } catch (error) {
      console.log('erro');
    }
  };
  
  useEffect(() => {
    getRepo();
  }, []);
  
  return (
<C.Container >
    <C.Content>
      {repo.length === 0 ? <span>Carregando...</span> : (
        repo.map((repo) =>(
        <C.Selection href={repo.html_url} key={repo.id}>
          <C.Job >
            <C.Title>{repo.name}</C.Title>
              <C.Text>{repo.description}</C.Text>
              <C.Tag>{repo.language}</C.Tag>
          </C.Job>
        </C.Selection>
        ))
      )}
        
    </C.Content>
</C.Container>
  )
}


