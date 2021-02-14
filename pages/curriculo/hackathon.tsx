import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {
  ImgCertificates, Container
} from '../../styles/cursos/styles';


export default function Hackathon(): JSX.Element {
  return (
    <>
      <Head>
        <title>Hackathon | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Hackathon" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>

      <Container>
        <h1>Evento Hackathon</h1>

        <strong>
          <span>
            
          Em Maio de 2019, fomos desafiados a criar novos enigmas para salas de escape da Time Escape Game qual 
          trabalha com gamificação objetivando escapar de diversas salas. <br /><br />
          Com o nome EXCALIBUR, fomos os vencedores deste Hackathon com os melhores enigmas com o tema de Caverna do Dragão 
          desenvolvidos em apenas e intensas 24 horas em um evento que reuniu mais de cinquenta alunos na IMED. 
          <br />Utilizamos muitas placas arduino, shields, 
          raspberry Pi, sensores, atuadores e programação para unir todas as peças e então, estar livre da sala. 
            
            
            

            <br /> Veja nas noticias da IMED {" "}</span>
          <a
            href="https://www.imed.edu.br/Comunicacao/Noticias/hackathon-imed--24h-de-maratona-tecnologica"
            target="_blank"
            rel="noopener noreferrer"
          >
            aqui
            </a>
        </strong>{"."}
        <h1></h1>   
      </Container>
      <ImgCertificates>
     
        <img src="/assets/cursos/using_cursos_images/hackathon1.png" alt="foto hackathon" />
        <img src="/assets/cursos/using_cursos_images/hackathon2.png" alt="foto hackathon" />


        <Link href="/curriculo">
          <a>
            <Button>voltar</Button>
          </a>
        </Link>
      </ImgCertificates>
    </>
  );
}
