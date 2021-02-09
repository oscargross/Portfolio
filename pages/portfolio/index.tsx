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
          <span> Graduando em Engenharia de Redes de Comunicações na UnB</span>
        </strong>
        <strong>
          - Bootcamp:
          <span> Sou formado no Bootcamp GoStack da Rocketseat</span>
        </strong>
        <strong>
          - Estágio:
          <span> Experiência em desenvolvimento mobile com React Native</span>
        </strong>
        <strong>
          - Freelancer:
          <span>
            {' '}
            Atuo como desenvolvedor fullstack freelancer desde junho de 2020
          </span>
        </strong>
        <strong>
          - Emprego atual:
          <span>
            {' '}
            Trabalho como desenvolvedor Frontend (ReactJS + Typescript) no{' '}
            <a
              href="https://bbnk.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              BBNK
            </a>
          </span>
        </strong>

        <h1>Projetos</h1>

        <Project>
          <img src="/assets/teach-other.jpg" alt="Logo Teach Other" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Fullstack</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                Teach Other é uma plataforma de agendamento de aula particular
                para universitários (feita com NextJS + MongoDB), desenvolvida
                para a disciplina &quot;Projeto Transversal 1&quot; da
                Universidade de Brasília (UnB).
              </span>
            </strong>
            <Link href="/portfolio/teach-other">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/bossabox.jpeg" alt="Logo BossaBox" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Fullstack</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                VUTTR foi o desafio fullstack que desenvolvi para passar na
                plataforma de freelancing chamada Bossabox. O frontend foi feito
                com React + Typescript e o backend com o Adonis V4.
              </span>
            </strong>

            <Link href="/portfolio/bossabox">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/berg.png" alt="Logo berg" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Frontend, Designer</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                bergdaniel.com.br é o site que você está acessando. Eu o criei
                do completo zero, desde a concepção da arquitetura e navegação
                de páginas no whimsical e o design no Figma até o
                desenvolvimento com NextJS.
              </span>
            </strong>
            <Link href="/portfolio/bergdaniel">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/astro_muri.png" alt="Astro Muri" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Frontend</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                Ricardo Muri é um astrólogo famoso e influencer, e “Astro Muri”
                é um aplicativo mobile híbrido que faz streaming do seu
                conteúdo. Eu desenvolvi tudo relacionado à tela de login, o
                processo de pagamento (usando o pagseguro), e conectei todas as
                páginas ao backend (firebase).
              </span>
            </strong>
            <Link href="/portfolio/astromuri">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/rocketseat.png" alt="Logo Rocketseat" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Fullstack</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                Bootcamp GoStack. Abordou os seguintes temas: ReactJS, React
                Native e NodeJS com Typescript.
              </span>
            </strong>
            <Link href="/portfolio/rocketseat">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/upwork.png" alt="Logo Upwork" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Fullstack</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                Estou disponível como freelancer na plataforma Upwork.
              </span>
            </strong>

            <Button link="https://www.upwork.com/o/profiles/users/~01d7d71fa714d6ce9d/">
              ver mais
            </Button>
          </Text>
        </Project>
      </Container>
    </>
  );
}
