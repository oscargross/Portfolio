import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates
} from '../../styles/cursos/styles';


export default function Eletronica(): JSX.Element {
  return (
    <>
      <Head>
        <title>Curriculo | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Curriculo" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>
            

      <ImgCertificates>
      <h1>Cursos e Certificados Typescript</h1> 
          <img src="/assets/cursos/certificados/ts_1.png" alt="Certificado TS" />    
          <img src="/assets/cursos/certificados/ts_2.png" alt="Certificado TS" />         

          <Link href="/curriculo">
              <a>
                <Button>voltar</Button>
              </a>
            </Link>
        </ImgCertificates>
    </>
  );
}
