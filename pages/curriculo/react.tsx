import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates
} from '../../styles/cursos/styles';


export default function ReactPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>ReactPage | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="ReactPage" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>           

      <ImgCertificates>
        <h1>Cursos e Certificados React</h1> 
          <img src="/assets/cursos/certificados/react_1.png" alt="Certificado React" />    
          <img src="/assets/cursos/certificados/react_2.png" alt="Certificado React" />    
          <img src="/assets/cursos/certificados/react_3.png" alt="Certificado React" />    
          <img src="/assets/cursos/certificados/react_4.png" alt="Certificado React" />    
          <img src="/assets/cursos/certificados/react_hooks.png" alt="Certificado React" />    
          <img src="/assets/cursos/certificados/react_native_1.png" alt="Certificado React" />    
          <img src="/assets/cursos/certificados/react_native_2.png" alt="Certificado React" />   
          <Link href="/curriculo">
              <a>
                <Button>voltar</Button>
              </a>
            </Link>
      </ImgCertificates>
    </>
  );
}
