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
        <meta name="og:title" property="og:title" content="Curriculo" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>

      <Container>
        <h1>Evento Hackathon</h1>

        <strong>
          <span>
            Fomos desafiados a desenvover, em 24h, enigmas para novas salas de escape da Time Escape Game. Essa empresa
            trabalha com gamificação e desenvolvimento de pessoas para escaparem de salas com diversos enigmas.
            Nosso grupo foi o ganhador, trabalhando as 24h em um fluxo de enigmas com o tema "Caverna do Dragão"
            utilizando muitas placas arduino, shields, raspberry Pi, sensores, atuadores e programação para unir todas as peças dos enigmas.
            <br /><br />

            O evento ocorreu nos dias 03 e 04 de maio de 2019 na IMED-PF e reuniu
            mais de 50 alunos.
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
