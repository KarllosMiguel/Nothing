import styled from 'styled-components';
import { Button } from '../../Header/styles';
export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media screen and (max-width: 1000px){
justify-content: center;
}
`

export const Blur = styled.div`
  height: 150px;
  width: 150px;
  position: absolute;
  background: rgb(255,113,215);
  opacity: 0.7;
  background: linear-gradient(135deg, #ff71d7 0%, #faa0bf 50%, #f7b750 100%);
  z-index: -1;
  filter: blur(100px);
`;
export const Title = styled.h1`
  font-size: var(--main-text-size);
  letter-spacing: 4px;
`
export const GradientText = styled.span`
  background: rgb(255,113,215);
  background: linear-gradient(135deg, rgba(255,113,215,1) 0%, rgba(250,160,191,1) 50%, rgba(247,183,80,1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0;
`
export const SecondaryTitle = styled.h2`
  font-size: var(--main-text-size-2);
`
export const Image = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.4;
  top: -250px;
  @media screen and (max-width: 1000px){
    width: 75%;
justify-content: center;
}
`
export const GradientButton = styled(Button)`
  background: #ff71d7;
  background: linear-gradient(135deg, #ff71d7 0%, #faa0bf 50%, #f7b750 100%);
  color: var(--white);
  font-weight: 500;
  gap: 5px;
  font-size: var(--text-size-2);
  border-radius: 20px;
  margin-top: 25px;
  cursor: pointer;
    &:hover{
      opacity: 0.9;
}
`
