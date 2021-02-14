import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates, Container
} from '../../styles/cursos/styles';


export default function Eletronica(): JSX.Element {
  return (
    <>
      <Head>
        <title>Eletronica | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Eletronica" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>

      <Container>
        <h1>Curso Técnico em Eletrônica</h1>        
          <span>
            Curso técnico com duração de 2 anos, aprendi toda a base teórica, bem como prática, desde circuitos eletricos e eletrônicos, cálculos, análise técnica,
            todos os componentes, suas utilizades e características, montagem de circuitos e projetos, telecomunicações, sistemas digitais, transmissoes e receptores... 
            curso iniciado em 2010 e finalizado em 2012, iniciei no mercado de trabalho neste ramo e prossegui durante 9 anos, unindo gestão, processos administrativos e 
            muita eletrônica específica até o ano de 2021.
            <br /> </span>
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
