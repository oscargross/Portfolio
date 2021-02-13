import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {
  ImgCertificates, Container
} from '../../styles/cursos/styles';


export default function WinterChallenge(): JSX.Element {
  return (
    <>
      <Head>
        <title>WinterChallenge | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Curriculo" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>

      <Container>
        <h1>Winter Challenge XV</h1>

     
          <span>
          A Winter Challenge é uma das maiores competições de robótica de toda a América Latina. 
          Ela envolve reais competições entre robôs, como combates, boxe, corridas, hockey, robô Trakking, seguidor de linha.
            <br /><br />
          Escolhemos a categoria compate, na linha Junior, que remete o peso máximo de até 13,6kg. O carro robô precisa
          passar por diversas inspeções, a equipe deve possuir vários requisitos e todos são extremamente seguidos pelo evento, quaisquer item errado ou nulo 
          desclassifica a equipe. 
          <br /><br />
          A ideia inicial veio da vitória do evento realizado pela IMED-Passo Fundo, a Robô-Challenge, no qual os carrinhos de combate são didáticos e 
          tmabém possuem o objetivo de destruir o oponente. No inicio do video abaixo mostra o carrinho lança chamas que fizemos e logo após, o carro robô para 
          um evento internacional.
          <br />
            Essa edição ocorreu em Setembro/2019 em Concórdia/SC. 
            <br /> </span>
            <h1></h1>   

      </Container>
      <ImgCertificates>
    
        <img src="/assets/cursos/using_cursos_images/winter_challenge1.png" alt="foto winter challenge" />
        <img src="/assets/cursos/using_cursos_images/winter_challenge2.png" alt="foto winter challenge" />
        <img src="/assets/cursos/using_cursos_images/winter_challenge3.png" alt="foto winter challenge" />
        
      </ImgCertificates>
      <ImgCertificates>

      <iframe src="https://www.youtube.com/embed/S8MD2Q7xTSc"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
     
      <Link href="/curriculo">
          <a>
            <Button>voltar</Button>
          </a>
        </Link>
      </ImgCertificates>

    </>
  );
}
