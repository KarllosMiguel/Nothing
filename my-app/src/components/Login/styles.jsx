import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background:#ffffffc5;
  gap: 10px;
  padding: 75px 50px;
  backdrop-filter: blur(10px);
  border: 2px solid var(--zinc-100);
  border-radius: 10px;
  scale: 1.;
`;
export const Input = styled.input`
    padding: 10px;
    border: 2px solid var(--zinc-100);
    border-radius: 4px;
`