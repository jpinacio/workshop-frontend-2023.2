import { useEffect, useState } from 'react'
import './App.css';

const API = "http://localhost:5000";

function App() {
  const [dados, setDados] = useState([]);
  
  useEffect(()=>{
    fetch('https://swapi.dev/api/people/')
    .then((Response)=> Response.json())
    .then((data)=>setDados(data.results))
    .catch((error)=> console.log(error));
  });
  
  return (
    <div className="App">
    <header className="App-header">

        <h1 className='h1'>
          A sombria Galáxia de:
        </h1>
        <img src="war.png" width="1000" height="550" />

        <div class='button'>
        <button href="http://localhost:3000/">INÍCIO</button>..........<button href="">GALERIA</button>
        </div>
        
     
        <div className='curiosidades'><p><h3>___________________TOP 10 CURIOSIDADES SOBRE STARS WARS___________________</h3>
        <br></br>
          1. A Origem do Nome: O título "Star Wars" foi inspirado por filmes de aventura serial dos anos 1930 e 1940, como "Flash Gordon".</p>

          <p>2. Efeitos Especiais Revolucionários: Os filmes de Star Wars foram pioneiros na utilização de efeitos especiais inovadores, ganhando vários prêmios devido a isso.</p>

          <p>3. Modelo Millennium Falcon: A nave Millennium Falcon foi construída a partir de peças de kit de modelos de guerra em plástico e outros componentes, dando-lhe uma aparência única.</p>

          <p>4. Ordem de Lançamento: George Lucas lançou os filmes da saga na ordem IV, V, VI, I, II e III, mas a história se passa na ordem I, II, III, IV, V e VI.</p>

          <p>5. Ewoks: Os pequenos habitantes da lua de Endor, os Ewoks, foram originalmente concebidos para serem Wookiees, mas foram alterados devido a restrições de orçamento.</p>

          <p>6. Guerra dos Tronos: David Benioff e D.B. Weiss, os criadores de "Game of Thrones", estavam trabalhando em uma série de filmes de Star Wars, mas abandonaram o projeto.</p>

          <p>7. Os Efeitos Sonoros de Star Wars: Muitos dos sons icônicos de Star Wars, como o rugido de um TIE Fighter, foram criados misturando sons de objetos comuns, como motores a jato e elefantes.</p>

          <p>8. O Criador de Yoda: A voz original de Yoda foi fornecida por Frank Oz, que também deu vida a personagens como Miss Piggy e Cookie Monster dos Muppets.</p>

          <p>9. Darth Vader: A voz de Darth Vader foi dublada por James Earl Jones, enquanto o ator que vestiu a armadura foi David Prowse.</p>

          <p>10. A Trilha Sonora de John Williams: O compositor John Williams criou a icônica trilha sonora de Star Wars, que se tornou uma das músicas mais reconhecíveis na história do cinema.<h3>______________________________________________________________________________</h3></p></div>
        
          <img src="war.png" width="500" height="250"/>
          <div className='card'>
            
          <h1>_______________CARDS DA GALERIA_______________</h1>
          
          {dados.map((item)=> (
          <div key={item.id}>
            <h1>Nome: {item.name}</h1>
            <h1>Massa: {item.mass}</h1>
            <h1>Cor do cabelo: {item.hair_color}</h1>
            <h1>Cor da pele: {item.skin_color}</h1>
            <h1>Cor do olho: {item.eye_color}</h1>
            <h1>Data de nascimento: {item.birth_year}</h1>
            <h1>Gênero: {item.gender}</h1>
            <h1>_______________________________________________</h1>
          </div>
    
    
      ))}   
      </div>
      <div class="ir">   
        <a href="">CLIQUE AQUI PARA VOLTAR AO INÍCIO</a>
      </div>
      <br></br>
      <img src="24S3.gif" width="700" height="250"/>
      </header>
    </div>
  );
}

export default App;
