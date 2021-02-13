import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates
} from '../../styles/cursos/styles';


export default function Js (): JSX.Element {
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
      <h1>Cursos e Certificados Javascript</h1> 
          <img src="/assets/cursos/certificados/js_1.png" alt="Certificado JS" />    
          <img src="/assets/cursos/certificados/js_2.png" alt="Certificado JS" />   
          <img src="/assets/cursos/certificados/js_3.png" alt="Certificado JS" />         
          <img src="/assets/cursos/certificados/js_mvc.png" alt="Certificado JS" />         
          <img src="/assets/cursos/certificados/js_padroes.png" alt="Certificado JS" />         
          <img src="/assets/cursos/certificados/js_poo.png" alt="Certificado JS" />         
          <img src="/assets/cursos/certificados/js_spa.png" alt="Certificado JS" />         
          <img src="/assets/cursos/certificados/js_web.png" alt="Certificado JS" />         


          <Link href="/curriculo">
              <a>
                <Button>voltar</Button>
              </a>
            </Link>
        </ImgCertificates>
    </>
  );
}
