import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import {
  ImgCertificates
} from '../../styles/cursos/styles';

import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/portfolio_pages/styles';
import Button from '../../components/Button';

export default function Web_Scraping(): JSX.Element {
  return (
    <>
      <Head>
        <title>Web Scraping | Portfolio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="Web Scraping"
        />
        <meta
          name="description"
          content="Web Scraping para envio de mensagens via What'sApp"
        />
      </Head>
      <Container>
        <h1>Web Scraping</h1>
        <img src="/assets/portfolio_images/web_scraping.png" alt="Logo Biocare System" />
        <strong>
          - Projeto:
          <span> Desenvolvimento de site com auxilio de raspagem de dados realizado no back end</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor</span>
        </strong>       
        <strong>
          - Tecnologias:
          <span> React, NextJS, Puppetter</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Vercel / Heroku</span>
        </strong>
      
        <strong><br />
          - Contexto:
          <span>
            {' '}
            Visando a otimização do tempo, fez-se necessário um sistema de automação qual encaminhe via whatsapp, 
            lembretes da necessidade de manutenção/revisão periódica de equipamentos para a garantia do bom funcionamento. 
            Tal tarefa era realizada manualmente, o que ocupava boa parte do tempo dos técnicos e, não sendo efetivo. Assim, 
            com a raspagem de dados dos clienes no ERP utilizado pela empresa, são coletados dados de telefone/whatsapp e quais 
            os equipamentos passaram por revisão no período de seis meses à um ano para encaminhar o aviso. Descrição completa 
            do projeto no README(git).
          </span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Utilizado Next para montagem da interface em react e a raspagem dos dados ficou separada no diretório pages/api, onde o puppetter 
            executou o scraping em seu navegador interno, sendo assim os dados foram repassados da API para o front.
            O acesso ao Whats ocorre também utilizando raspagem de dados, é feito um screenshoot da tela no momento em que o QRCode de acesso ao whats aparece na tela, e nesse momento
             essa imagem é renderizada na tela do site para o usuário acessar o Whats apontando seu celular ao QRCode... a tela recarrega caso "não entrar no whats", pegando assim o novo 
             QRCode.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/oscargross/Scraping-NextJs">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>
          <Button link="https://scraping-next-js.vercel.app/">
            <BiWorld size={25} color="#fff" />
            Site
          </Button>
        </ButtonContainer>
      </Container>
      <ImgCertificates>

        <img src="/assets/portfolio_images/web_scraping.png" alt="Print aplicação Web Scraping" />
        <img src="/assets/portfolio_images/using_portfolio_images/web_scraping2.png" alt="Print aplicação Web Scraping" />

      </ImgCertificates>
    </>
  );
}
