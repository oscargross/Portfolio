import Head from 'next/head';
import Link from 'next/link'

import Button from '../../components/Button';
import {
  ImgCertificates, Container
} from '../../styles/cursos/styles';


export default function WinterChallenge(): JSX.Element {
  return (
    <>
      <Head>
        <title>WinterChallenge | Oscar Gross Jr</title>
        <meta name="og:title" property="og:title" content="WinterChallenge" />
        <meta
          name="description"
          content="Graduação, experiência e projetos do Oscar Gross"
        />
      </Head>

      <Container>
        <h1>Winter Challenge XV</h1>
        <span>Winter Challenge, a maior competição de robótica da América Latina teve sua 15º edição realizada em Concórdia SC em Setembro/2019,
        envolvendo diversas categorias como combate, boxe, corridas, hockey, robô trakking entre outras. <br /><br />
      A equipe AeroWise, qual foi inspirada por ser vencedora da Robô-Challenge na IMED no mesmo ano com o robô lança chamas
      (confira video disponível) fez parte deste evento na categoria  Featherweight que corresponde ao peso máximo de 13,6kg. <br /><br />
      Ainda, o carro/robô antes da competição em arena passa por diversas e rigorosas inspeções, quaisquer itens em desacordo às
      normas desclassifica a equipe. <br /><br />
      A participação no evento com tamanha dimensão, trouxe não só muito aprendizado como diversão,
      e a possibilidade enriquecedora de ter contato com grandes e conhecidas equipes do meio.

        <br /> </span>
        <h1></h1>

      </Container>
      <ImgCertificates>

        <img src="/assets/cursos/using_cursos_images/winter_challenge1.png" alt="foto winter challenge" />
        <img src="/assets/cursos/using_cursos_images/winter_challenge2.png" alt="foto winter challenge" />
        <img src="/assets/cursos/using_cursos_images/winter_challenge3.png" alt="foto winter challenge" />

      </ImgCertificates>
      <ImgCertificates>

        <iframe src="https://www.youtube.com/embed/S8MD2Q7xTSc" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

        <Link href="/curriculo">
          <a>
            <Button>voltar</Button>
          </a>
        </Link>
      </ImgCertificates>

    </>
  );
}
