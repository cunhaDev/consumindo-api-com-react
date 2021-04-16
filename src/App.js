import { render } from '@testing-library/react';
import React, { Component } from 'react';

import api from './api';

class App extends Component{ 

  state={
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get("/filmes");
    this.setState({filmes: response.data});
  }
      render(){
            const {filmes} = this.state;
             return(
                  <div>
                          <h1>Repositório de Links</h1>
                          {console.log(filmes)}
                          {filmes.map(filme => 
                            <li key={filme.id}>
                                <h2>
                                  <strong>Titulo: </strong>
                                      {filme.titulo}
                                  </h2>

                                  <h2>
                                  <strong>Descrição: </strong>
                                      {filme.descricao}
                                  </h2>

                                  <h2>
                                  <strong>Link: </strong>
                                      {filme.link}
                                  </h2>

                                  <h2>
                                  <strong>Capa: </strong>
                                      {filme.foto}
                                  </h2>
                            </li>
                            )}
                  </div>
      );
    }

}

export default App;
