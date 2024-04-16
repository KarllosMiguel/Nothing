import React from 'react';

import { Container } from './styles';
import { Link, Title } from '../Header/styles';
import Nothing from '../../assets/nothing.jpg';
import { GradientText} from '../pages/home/styles';
import { Text } from '../pages/services/styles';
const Footer = () => {
  return(
    <Container>
      <Text>Powered by  <GradientText><Link style={{marginLeft:'5px'}} href='https://github.com/KarllosMiguel' > Karllos Miguel</Link></GradientText></Text>
    </Container>
  );
}

export default Footer;