import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/portfolio_pages/styles';
import Button from '../../components/Button';

export default function Blog_Estetica(): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog Estetica | Portfolio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="Blog Estetica"
        />
        <meta
          name="description"
          content="Aplicativo mobile híbrido feito com React Native, Redux e Firebase"
        />
      </Head>
      <Container>
        <h1>Blog Estética</h1>
        <img src="/assets/blog_estetica.png" alt="Logo Blog Compare Estetica" />
        <strong>
          - Projeto:
          <span> Desenvolvimento de um Blog em NextJS</span>
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
          <span> Netlify, Vercel</span>
        </strong>
      
        <strong><br />
          - Contexto:
          <span>
            {' '}
            Blog foi criado para expor opiniões sobre equipamentos de estética e fisioterapia 
            no mercado, sem relação alguma as marcas, mostrando a realidade dos equipamentos, 
            se entregam o que prometem, os modelos que apresentam problemas, quais problemas, 
            o que levar em conta na hora de comprar um, até porque não são baratos e nao encontrei
            nenhum blog ou local web que trate esse assunto com transparência.
          </span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Foi executado com a estrutura que o Next oferece, em conjunto com a hospedagem na vercel.
            Está sendo utilizado o CMS Prismic para gerenciamento, modelamento e repositório das postagens.
            O envio de e-mail no formulário da aba de contato foi realizado com a ajuda de um serviço
            chamado Formspree, e arquivos "Premium" em pdf podem ser baixados com o pagamento e controle 
            realizado com a ferramenta Eduzz.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/oscargross/Blog_NextJS">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>
          <Button link="http://compareestetica.com/">
            <BiWorld size={25} color="#fff" />
            Site
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
