import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter',sans-serif;
        transition: 600ms;
        scroll-behavior: smooth;

        ::-webkit-scrollbar{
            display: none;
        }
}
*,input,button{
    outline: 0;
    border: 0;
}

:root{
    --text-size:20px;
    --text-size-2:16px;
    --main-text-size:68px;
    --main-text-size-2:40px;

    --white:#fff;
    --black:#000;

    --blue-50:#E6F1FE;
    --blue-100:#CCE3FD;
    --blue-200:#99C7FB;
    --blue-300:#66AAF9;
    --blue-400:#338EF7;
    --blue-500:#006FEE;

    --zinc-50:#fafafa;
    --zinc-100:#F4F4F5;
    --zinc-200:#E4E4E7;
    --zinc-300:#D4D4D8;
    --zinc-400:#A1A1AA;
    --zinc-500:#71717A;
    --zinc-600:#52525B;
    --zinc-700:#3F3F46;
    --zinc-800:#27272A;
    --zinc-900:#18181B;
}
body{
    height: 100%;
    width: 100%;



}
`
export default GlobalStyle;