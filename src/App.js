import"./global.css"
import PrimeiraTela from "./components/PrimeiraTela";
import Rodape from "./components/Rodape";
import tela1 from"./components/PRIMEIRAcAPA.png"
import Conteudo1 from "./components/conteudo1";
import Foto from "./components/uma dos shorindignger.jpeg"
import Conteudo2 from "./components/conteudo2";
import Fotoo from "./components/experiemnto do gato.jpg";



function App() {
  
  

  

  
  return (
   <>
   <PrimeiraTela primeiratela={tela1}/>
   <Conteudo1 conte1="Poderia um gato estar vivo e morto ao mesmo tempo?" img={Foto} conte11="A resposta é sim, de acordo com Erwin Schrödinger, (um físico austríaco), propos juntamente com o auxilio da mecanica quantica em 1935, essa teoria do “Gato de Schrödinger”"/>
    <Conteudo2 img={Fotoo} conte2="Basicamente, o experimento se consiste em colocar um gato dentro de uma caixa, juntamente com um frasco de veneno que estaria ''liagado'' a um medidor de radiaçao, e tambem dentro da caixa estaria um elemneto que tem 50% de chance de emitir radiaçao, caso o elemento emita, o medidor ativa e faz com que o veneno mate o gato, caso contrario o gato permanece vivo. A questao é, enquanto nao abrirmos a caixa, o gato estaria em um estado de Super posiçao quantica, ou seja, vivo e morto ao mesmo tempo, mas é claro que nao conseguimos observar esse estado, pois, ao abrir a caixa esse estado de Super posiçao ''some'', e entao verieamos o gato apenas vivo ou apenas morto, mas nao os dois. Isso tambem entre na questao do efeito Onda Particlua, e em questoes de Quanticidade, mas esse é um outro assunto que entraremos em outro momento."/>
    <Rodape rodape1="Se gostou dessa teoria, e tem interese e curiosidade sobre coisas desse tipo, paradoxos, ciencia e muito mais, considere se cadastrar com seu email no site para receber mais informaçoes e curiosidades desse tipo." rodape2="este é um canal do YouTube que fala sobre ciencia, consiere dar uma olhada, nao vai se arrepender : https://www.youtube.com/user/Cienciatododia "/>
   </>
  );
}

export default App;
