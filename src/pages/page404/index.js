import React from 'react';
import { Paragrafo, Small } from './styled';
import { Container } from '../../shared/styles/globalStyles';

export default function Page404() {
  return (
    <Container>
      <Paragrafo>
        Erro 404
        <p />
        <Small>Essa página não existe</Small>
      </Paragrafo>
    </Container>
  );
}
