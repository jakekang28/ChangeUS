import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Spoqa Han Sans";
  font-style: normal;
  font-weight: 300;
  src: url("../assets/fonts/SpoqaHanSans-Light.ttf") format("truetype");
}

@font-face {
  font-family: "Spoqa Han Sans";
  font-style: normal;
  font-weight: 400;
  src: url("../assets/fonts/SpoqaHanSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Spoqa Han Sans";
  font-style: normal;
  font-weight: 500;
  src: url("../assets/fonts/SpoqaHanSans-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "Spoqa Han Sans";
  font-style: normal;
  font-weight: 600;
  src: url("../assets/fonts/SpoqaHanSans-SemiBold.ttf") format("truetype");
}

@font-face {
  font-family: "Spoqa Han Sans";
  font-style: normal;
  font-weight: 700;
  src: url("../assets/fonts/SpoqaHanSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "NanumSquareRound";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

    ${reset};
    * {
        box-sizing: border-box;
        font-weight: 600;
        /* font-family: "Spoqa Han Sans", "NanumSquareRound", sans-serif; */
    }
    body{
        padding: 0;
        margin: 0;
        font-family: "NanumSquareRound", sans-serif;

    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: transparent;        
    };
    input{
        display: flex;
        outline: none;
        padding-left: 0.625rem;
    }
    ol,
    ul {
        list-style: none;
    } ;
    a {
        text-decoration: none;
    }

    :root {
        --main-brand: #04D7B7 ;        
        --point-brand : #FFD52B ; 
        --sub-brand : #463B65 ; 
        --red : #FB5C4E ;
        --blue : #3EABFF ;
        --white : #ffffff ; 
        --light-gray-01 : #DFDFDF ; 
        --light-gray-02 : #C1C1C1 ; 
        --font-01 : #403E47 ; 
        --font-02 : #828282 ;
    }
`;

export default GlobalStyle;
