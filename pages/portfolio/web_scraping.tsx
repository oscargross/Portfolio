import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


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
            O projeto teve inicio para automatizar o envio de avisos de próximas manutenções via What'sApp de equipamentos de estética, os quais precisam passar
             por calibração periódica, porém os avisos ocorriam manualmente. Com a raspagem de dados dos clientes no ERP que a empresa utiliza, foram coletados os dados 
             de telefone/Whats dos clientes os quais seu(s) equipamento(s) passaram por manutenção a um ano/seis meses atrás, e envio das mensagens automáticas de aviso via Whats.
             No README do projeto foi descrito todo o caso de uso.
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
    </>
  );
}
