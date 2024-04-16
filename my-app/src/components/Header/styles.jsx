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
        color:var(--zinc-900);
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

    @media screen and (max-width: 1000px){
    left: 50px;
}
`
export const Nav = styled.nav`
    display: flex;
    gap: 50px;

    @media screen and (max-width: 1000px){
    display: none;
}
`
export const Logo = styled.image

export const ResponsiveButton = styled(Button)`
    position: absolute;

    right: 50px;
    background: transparent;
     color: rgba(255,113,215,1);
`