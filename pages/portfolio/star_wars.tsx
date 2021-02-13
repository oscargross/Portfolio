import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/portfolio_pages/styles';
import Button from '../../components/Button';

export default function Star_Wars(): JSX.Element {
  return (
    <>
      <Head>
        <title>Star Wars | Portfolio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="Star Wars"
        />
        <meta
          name="description"
          content="Aplicativo mobile híbrido feito com React Native, Redux e Firebase"
        />
      </Head>
      <Container>
        <h1>Star Wars</h1>
        <img src="/assets/portfolio_images/star_wars.png" alt="Logo Star Wars" />
        <strong>
          - Projeto:
          <span> Desenvolvimento de um site com consumo de uma API</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor</span>
        </strong>       
        <strong>
          - Tecnologias do Frontend:
          <span> React</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Netlify</span>
        </strong>
      
        <strong><br />
          - Contexto:
          <span>
            {' '}
            Site criado na graduação para consumo de uma API pública e mostra dos dados coletados no site feito em React.
          </span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Utilizado Express, Axios e React para componentização.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/oscargross/ReactClass-StarWars">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>
          <Button link="https://github.com/oscargross/ReactClass-StarWars">
            <BiWorld size={25} color="#fff" />
            Site
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
