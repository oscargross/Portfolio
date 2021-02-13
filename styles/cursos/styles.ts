import styled from 'styled-components';

export const Container = styled.main`
  width: 80vw;
  margin: 0 auto;
  display: block;
  flex-direction: row;
  animation: loadAnimation;
  animation-duration: 500ms;
  align-items: initial;

  

  h1 {
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 32px;
  }

  strong,
  span {
    font-size: 18px;
  }

  span {
    font-weight: 400;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;


    h1 {
      text-align: center;
      font-size: 30px;
    }

    strong,
    span {
      font-size: 16px;
    }
  }
  @media (max-width: 560px) {
    text-align: center;


  }
`;

export const ImgCertificates = styled.main`
  width: 80vw;
  margin: 0 auto;
  display: block;
  animation: loadAnimation;
  animation-duration: 500ms;
  text-align: center;

  iframe{
    width:560px;
    height:315px;
  }

  h1 {
    font-weight: 700;
    margin-top: 100px;
    margin-bottom: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 32px;
  }
  button{
    text-align:center;
    margin: 18px auto;
    font-size: 15px;
  }

  img{
    display: inline;
    height:400px;
    margin: 20px 20px;
    text-align: center;
  }

    @media (max-width: 700px){
      width: 100vw;
      margin: 0 0;

      iframe{
        width:337px;
        height:190px;
      }

      img{
        height:250px;
      }

    }
    @media (max-width: 390px){
      img{
        height: 130px
      }
    }

`


export const Courses = styled.section`
  display: inline-block;
  margin: 20px 30px;
  align-items: center;
 

  button {
    margin: 10px auto;
    padding: 5px;
    font-size: 12px;
    align-items: center;
    text-align: center;
  }

  img {
    width: 165px;
    height: 157px;
    border-radius: 6px;
    display: inline;
  }
  h2{
    text-align: center;
    width: 165px;
    margin-bottom: 10px;


  }
  h4{
    width: 165px;
    text-align: left;
    margin: 10px auto;


  }

  @media (max-width: 700px) {

    button {
      margin: 14px auto 0 auto;
    }

    img {
      margin: 0 auto;
      width: 125px;
      height: 119px;
    }
  }
  @media (max-width: 560px) {
    flex-direction: column;
    text-align: center;


  }

`;

export const Text = styled.aside`
  @media (max-width: 700px) {
    margin: 10px 0 10px 0;
  }
`;
