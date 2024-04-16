import React from 'react';

import { Card, CardContainer, Container ,TitleCard,Text,Icon} from './styles';
import { Blur,  GradientText, SecondaryTitle } from '../home/styles';

import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FiUser } from "react-icons/fi";


const Services = () => {
  return(
    <>
    <Container id='services'>
      <Blur/>
      <SecondaryTitle>
       What we do? <br/>
        <GradientText>
           nothing
        </GradientText>
      </SecondaryTitle>
      <CardContainer>
      <Card>
      <TitleCard><Icon><MdOutlineVerifiedUser/></Icon>Nothing of problems</TitleCard>
      <Text>All our users have 0% problems with our software, no bugs and no errors</Text>
      </Card>

      <Card>
      <TitleCard><Icon><FiUser/></Icon>Nothing of complaints</TitleCard>
      <Text>All of our users have full approval of our software.</Text>
      </Card>

      <Card>
      <TitleCard><Icon><BsLightningCharge/></Icon>Nothing of slow</TitleCard>
      <Text>Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.</Text>
      </Card>
      </CardContainer>
    </Container>
    
    </>
  );
}

export default Services;