/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../shared/styles/globalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Teste</small>
      </Title>

      <Paragrafo>Lorem ipsum</Paragrafo>

      <button type="button">Enviar</button>
    </Container>
  );
}
