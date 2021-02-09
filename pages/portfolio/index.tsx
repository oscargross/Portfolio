import Link from 'next/link';
import Head from 'next/head';

import { Container, Project, Text } from '../../styles/portfolio/styles';
import Button from '../../components/Button';

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="Portfolio" />
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

        <h1>Projetos</h1>
        <Project>
          <img src="/assets/blog_estetica.png" alt="Logo Blog Compare Estetica" />
          <Text>
            <strong>
              - Finalidade:
              <span> Blog de opiniões sobre equipamentos de Estética</span>
            </strong> <br />
            <strong>
              - Função:
              <span> Desenvolvedor (Next)</span>
            </strong>
            <br />
            <strong>
              - Descrição:{" "}
              <span>
                Blog utilizando NextJS e CMS Prismic para gerenciar postagens. Ainda está em produção, com envio de e-mail e envio de arquivos digitais pagos.<br />
                Site: </span>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a><br />
              <span>Projeto: </span>
              <a
                href="https://github.com/oscargross/Blog_NextJS"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a></strong>{"."}

            <Link href="/portfolio/blog_estetica">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/portfolio_project.png" alt="Logo Portfólio Oscar Gross" />
          <Text>
            <strong>
              - Finalidade:
              <span> Portfólio Oscar Gross</span>
            </strong> <br />
            <strong>
              - Função:
              <span> Desenvolvedor (Next)</span>

            </strong>
            <br />
            <strong>
              - Descrição:{" "}
              <span>
                Portfólio para mostra dos projetos que já desenvolvi e experiências no mercado de trabalho<br />
                Site: </span>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a><br />
              <span>Projeto: </span>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a></strong>{"."}

            <Link href="/portfolio/portfolio">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/logo_fluxo_de_caixa.png" alt="Logo Fluxo de Caixa" />
          <Text>
            <strong>
              - Finalidade:
              <span> Fluxo de Caixa Web</span>
            </strong> <br />
            <strong>
              - Função:
              <span> Desenvolvedor (Java)</span>
            </strong>
            <br />
            <strong>
              - Descrição:{" "}
              <span>
                Fluxo de Caixa foi um projeto acadêmico construído para o usuário realizar o controle financeiro, com lançamentos, extratos e previsão de gastos. Sistema feito em
                java Spring Boot Framework - Servlets/Maven, banco Postgresql e deploy no heroku. 
                Site: </span>
              <a
                href="https://fluxocaixaapp.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a><br />
              <span>Projeto: </span>
              <a
                href="https://github.com/gutto-ortolan/fluxo-caixa-java-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a></strong>{"."}


            <Link href="/portfolio/fluxo_caixa">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>
        <Project>
          <img src="/assets/web_scraping.png" alt="Logo Biocare System" />
          <Text>
            <strong>
              - Finalidade:
              <span> Web Scraping para envio de mensagens via What'sApp</span>
            </strong> <br />
            <strong>
              - Função:
              <span> Desenvolvedor (Next)</span>
            </strong>
            <br />
            <strong>
              - Descrição:{" "}
              <span>
                Foi necessária a raspagem de dados de um sistema interno da empresa para envio de mensagens via Whats sobre pós venda e pós assistência de equipamentos.
                No README do projeto foi descrito o caso de uso em que foi montado o sistema.  <br />
                Site: </span>
              <a
                href="https://scraping-next-js.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a><br />
              <span>Projeto: </span>
              <a
                href="https://github.com/oscargross/Scraping-NextJs"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a></strong>{"."}


            <Link href="/portfolio/web_scraping">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>
        <Project>
          <img src="/assets/flutter_services.png" alt="Logo App Agendamento de Serviços" />
          <Text>
            <strong>
              - Finalidade:
              <span> Aplicativo para agendamento de serviços</span>
            </strong> <br />
            <strong>
              - Função:
              <span> Desenvolvedor (Dart)</span>
            </strong>
            <br />
            <strong>
              - Descrição:{" "}
              <span>
                Aplicativo projetado em Flutter, com utilização de recursos do Firebase, com login, cadastro,
                CRUD de agendamentos de serviços. Possui 2 menus completos, 1 para
                usuários profissionais e outro para clientes, com 3 telas cada. Para acessar o código fonte, clique </span>
              <a
                href="https://github.com/oscargross/Flutter-Servicos"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a></strong>{"."}


            <Link href="/portfolio/app_flutter">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>
        <Project>
          <img src="/assets/ranking_places.png" alt="Logo App Ranking Places" />
          <Text>
            <strong>
              - Finalidade:
              <span>WebApp para opinar experiências em locais</span>
            </strong> <br />
            <strong>
              - Função:
              <span> Desenvolvedor (React)</span>
            </strong>
            <br />
            <strong>
              - Descrição:{" "}
              <span>
                Consiste em relatar sua experiência em locais anonimamente. É possivel visualizar todas as opiniões já relatadas por todos os usuários e controlar suas opiniões.
                Utilizado RealTime Database e Authentication do Firebase, deploy no Netlify.<br />
                Site: </span>
              <a
                href="https://react-ranking.netlify.app/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a><br />
              <span>Projeto: </span>
              <a
                href="https://github.com/oscargross/React-Ranking"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a></strong>{"."}


            <Link href="/portfolio/ranking_places">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/star_wars.png" alt="Logo Star Wars" />
          <Text>
            <strong>
              - Finalidade:
              <span>Consumo de API do Star Wars e FrontEnd para mostra dos dados</span>
            </strong> <br />
            <strong>
              - Função:
              <span> Desenvolvedor (React)</span>
            </strong>
            <br />
            <strong>
              - Descrição:{" "}
              <span>
                Consiste em consumir uma API com Express e mostrar os dados no site.<br />
                Site: </span>
              <a
                href="https://github.com/oscargross/ReactClass-StarWars"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a><br />
              <span>Projeto: </span>
              <a
                href="https://github.com/oscargross/ReactClass-StarWars"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
            </a></strong>{"."}


            <Link href="/portfolio/star_wars">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

      </Container>
    </>
  );
}
