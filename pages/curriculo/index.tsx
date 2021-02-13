import Head from 'next/head';
import Link from 'next/link'
import Button from '../../components/Button';
import {  
  Courses,Container
} from '../../styles/cursos/styles';

export default function Curriculo(): JSX.Element {
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
      <Container>
    

        <h1>Certificados</h1>       
        <Courses>
          <img src="/assets/cursos/_ts.png" alt="Logo TS" />        
          <Link href="/curriculo/ts">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        <Courses>
          <img src="/assets/cursos/_js.png" alt="Logo JS" />        
          <Link href="/curriculo/js">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        <Courses>
          <img src="/assets/cursos/_node.png" alt="Logo Node" />        
          <Link href="/curriculo/node">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        <Courses>
          <img src="/assets/cursos/_react.png" alt="Logo React" />        
          <Link href="/curriculo/react">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        <Courses>
          <img src="/assets/cursos/_html_css.png" alt="Logo Html Css" />        
          <Link href="/curriculo/html_css">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>

         
        </Container>
        <Container>

        <h1>Eventos e cursos em outras áreas</h1>       

        <Courses>
        <h2>Combate de Robos</h2>    

          <img src="/assets/cursos/winter_challenge.png" alt="Logo Winter Challenger" />  
          <h4>Participação na Winter Challenge XV, maior evento de competição de robótica da América Latina.</h4>    
      
          <Link href="/curriculo/winter_challenge">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        
        <Courses>
          <h2>Hackathon</h2>    

          <img src="/assets/cursos/hackathon.png" alt="Logo Hackathon" />
          <h4>Integrante do grupo ganhador da maratona de programação que durou 24h de desenvolvimento.</h4>    

          <Link href="/curriculo/hackathon">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>

        </Courses>

        <Courses>
          <h2>Eletrônica</h2>    

          <img src="/assets/cursos/eletronica.png" alt="Logo Eletrônica" />    
          <h4>Curso Técnico em Eletrônica, com duração de 2 anos e trabalho por 9 anos na área.</h4>    
    
          <Link href="/curriculo/eletronica">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        <Courses>
        <h2>Mecânica</h2>    

          <img src="/assets/cursos/mecanica.png" alt="Logo Mecânica" />
          <h4>Curso Técnico em Mecânica pela IFSUL Passo Fundo, com duração de 2 anos.</h4>    
        
          <Link href="/curriculo/mecanica">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        <Courses>
        <h2>Edificações</h2>    

          <img src="/assets/cursos/edificacoes.png" alt="Logo Edificações" />      
          <h4>Curso Técnico em Edificações pela IFSUL Passo Fundo, com duração de 2 anos.</h4>    
  
          <Link href="/curriculo/edificacoes">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
        </Courses>
        


        </Container>


      
    </>
  );
}
