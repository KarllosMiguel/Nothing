import { React, useState} from 'react';

import { Container,Input } from './styles';
import { GradientText, SecondaryTitle } from '../pages/home/styles';
import { Text } from '../pages/services/styles';

const Login = () =>{

  return (
    <Container>
      <GradientText><SecondaryTitle>Get started</SecondaryTitle></GradientText>
        <Input placeholder='Your First Name'/>
        <Input placeholder='Your Second Name'/>
        <Input placeholder='you@domain.com'/>
        {/* <Input type='checkbox'/> <Text>I accept Nothing's Terms and Conditions and Privacy Policy.</Text> */}
    </Container>
  );
}

export default Login;