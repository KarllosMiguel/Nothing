import styled from 'styled-components';

export const Container = styled.footer`
   height: 50px;
   width: 100%;
   backdrop-filter: blur(15px);
   background: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   border-top: 2px solid var(--zinc-100);
   z-index: 1000;
   gap: 5px;
`;
