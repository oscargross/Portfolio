import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/portfolio_pages/styles';
import Button from '../../components/Button';

export default function Portfolio_Project(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfólio | Portfólio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="Portfolio"
        />
        <meta
          name="description"
          content="Site para mostra o Portfólio Oscar Gross"
        />
      </Head>
      <Container>
        <h1>Portfólio Pessoal</h1>
        <img src="/assets/portfolio_images/portfolio_project.png" alt="Logo Portfólio Oscar Gross" />
        <strong>
          - Projeto:
          <span> Desenvolvimento em NextJS</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor</span>
        </strong>       
        <strong>
          - Tecnologias do Frontend:
          <span> React, NextJS</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Vercel</span>
        </strong>
      
        <strong><br />
          - Contexto:
          <span>
            {' '}
            Portfólio para apresentar projetos desenvolvidos e experiências no mercado de trabalho.<br />

          </span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Foi executado com a estrutura que o Next oferece.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>
          <Button link="">
            <BiWorld size={25} color="#fff" />
            Site
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
