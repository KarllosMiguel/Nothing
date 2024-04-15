import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 40px;
`

export const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;

  @media screen and (max-width: 1000px){
    display: grid;
  }
`
export const Card = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background: var(--white);
  display: flex;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #66666630;
  
  &:hover{
  box-shadow: 0px 0px 20px 0px #66666630;
  
  }
  `;
export const Text = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: var(--text-size-2);
  height: 100px;
  margin-top: 35px;

`
export const TitleCard = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 10px;
  font-weight: 600;
`
export const Icon = styled.div`
  height: 40px;
  width: 40px;
  background: #FFEDFA;
  color: #FF4ECD;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

`