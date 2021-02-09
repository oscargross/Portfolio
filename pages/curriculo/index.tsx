import Head from 'next/head';
import Button from '../../components/Button';
import { Container, Project, Text } from '../../styles/portfolio/styles';
import { ImImages } from 'react-icons/im';
import {
  
  ButtonContainer,
} from '../../styles/portfolio/portfolio_pages/styles';

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
        <h1>Experiência</h1>
        <strong>
          - Graduação:
          <span> Graduando Ciência da Computação (5/8 - 1/2021) na {""}</span>
          <a
            href="https://www.imed.edu.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMED-Passo Fundo/RS
            </a>
        </strong>
        <strong>
          - Emprego atual:
          <span>
            {" "}Trabalho como Gerente Técnico na empresa {" "}</span>
          <a
            href="https://www.biocarers.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Biocare Tecnologia
            </a>

        </strong>

        <h1>Cursos e Certificados</h1>       

        <Project>
          <img src="/assets/certificados/_ts.png" alt="Logo TS" />        
        <ButtonContainer>
          <Button link="">
            <ImImages size={25} color="#fff" />
            Certificados
          </Button>         
        </ButtonContainer>        
        </Project>
        <Project>
          <img src="/assets/certificados/_js.png" alt="Logo JS" />        
        <ButtonContainer>
          <Button link="">
            <ImImages size={25} color="#fff" />
            Certificados
          </Button>         
        </ButtonContainer>        
        </Project>

      </Container>
    </>
  );
}
