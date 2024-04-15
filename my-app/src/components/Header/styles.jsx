import styled from 'styled-components';

export const Container = styled.header`
   height: 65px;
   width: 100%;
   position: fixed;
   backdrop-filter: blur(15px);
   background: transparent;
   top: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: 2px solid var(--zinc-100);
   z-index: 1000;
`;
export const Link = styled.a`
    color:var(--zinc-400);
    text-decoration: none;
    font-size: var(--text-size-2);
    &:hover{
        background: rgb(255,113,215);
    background: linear-gradient(135deg, rgba(255,113,215,1) 0%, rgba(250,160,191,1) 50%, rgba(247,183,80,1) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    }
`
export const Button = styled.button`
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
`

export const Title = styled.h1`
    font-size: var(--text-size);
    top: 25%;
    position: absolute;
    left: 150px;
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
`
export const Nav = styled.nav`
    display: flex;
    gap: 50px;
`
export const Logo = styled.image