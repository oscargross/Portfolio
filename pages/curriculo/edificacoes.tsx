import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates, Container
} from '../../styles/cursos/styles';


export default function Edificacoes(): JSX.Element {
  return (
    <>
      <Head>
        <title>Edificacoes | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Edificacoes" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>

      <Container>
        <h1>Curso Técnico em Edificações</h1>

        
          <span>
            Curso técnico com duração de 2 anos, aprendi toda a base teórica, bem como prática, desde a fundação ao acabamento de imóveis, edifícios residenciais
            e comerciais. Alvenaria, esquadrias, ambientes internos e externos, topografia, terreno, plantas, desenho técnico fundações, telhados, 
            parte elétrica e hidráulica, materiais vedantes, escoramento, levantamento, entre diversos assuntos aprendidos e práticados durante 2 anos.
            <br /><br />

            Meu objetivo foi aprender construções pois acompanhei meu pai em algumas e segui as recomendações dele nessa questão, para sempre buscar saber mais.
            <br />  </span>
        <h1></h1>   
      </Container>
      <ImgCertificates>
     
        <img src="/assets/cursos/using_cursos_images/.png" alt="Certificado Edificações" />

        <Link href="/curriculo">
          <a>
            <Button>voltar</Button>
          </a>
        </Link>
      </ImgCertificates>
    </>
  );
}
