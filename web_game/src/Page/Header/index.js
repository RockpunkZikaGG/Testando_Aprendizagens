import React from 'react';

import { Container } from './styles';
import Menu from './Menu';

import logo from '../../Images/Logo.png';

export default function Header() {
  return (
    <Container>
        <header>
            <img src={logo} alt="" className="logo"/>
        </header>
        <nav>
            <Menu title='Legends'/>
            <Menu title='Strategies'/>
            <Menu title='Perfil'/>
        </nav>
    </Container>
  );
}
