import Head from 'next/head';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  Container,
  Hello,
  Left,
  SocialMedia,
  RightText,
} from '../styles/home/styles';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Oscar Gross" />
        <meta
          name="description"
          content="Oscar Gross, Desenvolvedor Web com foco em tecnologias Javascript e granduando Ciência da Computação na IMED-Passo Fundo/RS"
        />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img
              src="/assets/foto_perfil.png"
              alt="Foto de perfil Oscar Gross"
            />
            <SocialMedia>
            <a
              href="https://www.linkedin.com/in/oscar-gross-891534137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />              
            </a>              
              <a
                href="https://github.com/oscargross"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={36} />
              </a>
            </SocialMedia>
          </Left>
          <RightText>
            <h1>Desenvolvedor Web</h1>
            <h2>
              Tenho foco no desenvolvimento com Javascript para aplicações web.</h2>
            <p>
              Tecnologias e ferramentas que já utilizei: NodeJS, ReactJS, NextJS, Typescript.
            </p>
          </RightText>
        </Hello>
      </Container>
    </>
  );
}
