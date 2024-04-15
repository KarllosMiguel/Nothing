import React from 'react';
import { Container, Title,Blur, GradientText,Image ,GetStartedButton} from './styles';
import Grid from '../../../assets/Grid.svg'
import { IoIosArrowRoundForward } from 'react-icons/io';
import Login from '../../Login';
const Home = () => {
  return(
    <>
    <Container id='home'>
      <Blur/>
      <Image src={Grid}/>
      <Title>
        The first<GradientText> nothing</GradientText><br/> software

      </Title>
      <GetStartedButton>
            Get Started
            <IoIosArrowRoundForward size={22} />
        </GetStartedButton>
        {/* <Login/> */}
    </Container>
    
    </>
  );
}

export default Home;