import React from 'react';

import { Container, Title,Blur, GradientText,Image ,GradientButton} from './styles';
import Grid from '../../../assets/Grid.svg'
import { IoIosArrowRoundForward } from 'react-icons/io';

const Home = () => {
  return(
    <Container id='home' 
    >
      <Blur style={{top:'-75px'}}/>
      <Image src={Grid}/>
      <Title>
        The first<GradientText> nothing</GradientText><br/> software

      </Title>
      <GradientButton>
            Get Started
            <IoIosArrowRoundForward size={22} />
        </GradientButton>
        {/* <Login/> */}
    </Container>
  );
}

export default Home;