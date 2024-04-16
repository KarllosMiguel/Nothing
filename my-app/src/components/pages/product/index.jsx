import React from 'react';
import Spline from '@splinetool/react-spline'

import { Container, SplineContainer } from './styles';

import { GradientText,Title,GradientButton } from '../home/styles';
import { Text } from '../services/styles';
import { Blur } from '../home/styles';

const Product = () => {
  return(
    <>
    <Container id='product'>
      <Title>Our <GradientText>Product</GradientText></Title>
      <Text style={{textAlign:'center',fontSize:'var(--text-size)',color:'var(--zinc-700)'}}>
      Nothing streamlines your digital life with a clean interface and powerful features.<br/> From project organization to data analysis, we offer simplicity without compromise. <br/>Try Nothing today and experience the power of simplicity.
      </Text>
      <GradientButton>Get Started</GradientButton>
      <Blur style={{right:'150px'}}/>
      <SplineContainer>
      <Spline scene='https://prod.spline.design/8RQ9NZaMI3j-z8O8/scene.splinecode'/>
      </SplineContainer>
    </Container>
    
    </>
  );
}

export default Product;