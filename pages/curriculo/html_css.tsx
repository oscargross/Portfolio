import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates
} from '../../styles/cursos/styles';


export default function HtmlCss(): JSX.Element {
  return (
    <>
      <Head>
        <title>HtmlCss | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="HtmlCss" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>
            

      <ImgCertificates>
      <h1>Cursos e Certificados HTML e CSS</h1> 
          <img src="/assets/cursos/certificados/html_css_1.png" alt="Certificado HTML/CSS" /> 
          <img src="/assets/cursos/certificados/html_css_2.png" alt="Certificado HTML/CSS" />    
          <img src="/assets/cursos/certificados/html_css_3.png" alt="Certificado HTML/CSS" />    
          <img src="/assets/cursos/certificados/html_css_4.png" alt="Certificado HTML/CSS" />    


          <Link href="/curriculo">
              <a>
                <Button>voltar</Button>
              </a>
            </Link>
        </ImgCertificates>
    </>
  );
}
