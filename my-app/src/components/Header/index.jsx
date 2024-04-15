import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

import { Container, Link, Title,Nav } from './styles';
import { GradientText } from '../pages/home/styles';
import Nothing from '../../assets/nothing.jpg';
const Header = () => {
  return(
    <Container>
      <Link href='#home'><Title><img src={Nothing} height={30}/><GradientText>nothing</GradientText></Title></Link>
      <Nav>
        <Link href='#home'>Home</Link>
        <Link href='#services'>Services</Link>
        <Link href='#section'>Section</Link>
        <Link href='#'>Link4</Link>
      </Nav>

    </Container>
  )
}

export default Header;