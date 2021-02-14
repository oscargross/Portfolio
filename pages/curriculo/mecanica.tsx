import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates, Container
} from '../../styles/cursos/styles';


export default function Mecanica(): JSX.Element {
  return (
    <>
      <Head>
        <title>Mecânica | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Mecânica" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>
      <Container>
        <h1>Curso Técnico em Mecânica</h1>

        
          <span>
            Curso técnico com duração de 2 anos, aprendi toda a base teórica, bem como prática, desde os tipos de materiais, tipos de elementos, 
            temperas, elementos de usinagem, torno, fresa, retificação, engrenagens, soldas, laminação, equipamentos CNC, fundição, processos 
            de produção de aços, ferros, enfim, todo conteúdo sobre fabricação mecânica aprendidos e práticados durante 2 anos.
            <br /><br />

            Meu objetivo foi aprender a profissão que meu pai praticou em toda sua vida, pois sempre ouvi falar bem do ramo..
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
