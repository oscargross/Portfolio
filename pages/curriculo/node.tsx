import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {  
  ImgCertificates
} from '../../styles/cursos/styles';


export default function Node(): JSX.Element {
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
      <h1>Cursos e Certificados NodeJS</h1> 
          <img src="/assets/cursos/certificados/node_1.png" alt="Certificado Node" />    
          <img src="/assets/cursos/certificados/node_2.png" alt="Certificado Node" />    
          <img src="/assets/cursos/certificados/node_api.png" alt="Certificado Node" />    
          <img src="/assets/cursos/certificados/api_js.png" alt="Certificado Node" />    


          <Link href="/curriculo">
              <a>
                <Button>voltar</Button>
              </a>
            </Link>
        </ImgCertificates>
    </>
  );
}
