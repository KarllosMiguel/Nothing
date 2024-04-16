import styled from 'styled-components';
import { Button } from '../../Header/styles';


export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  
  
`
export const SplineContainer = styled.div`
  height: 500px;
  max-width: 500px;
  padding: 25px;
  border-radius:20px;
  position: absolute;
  left: 50px;
  @media screen and (max-width: 1000px){
    display: none;
}
`