import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado por Thiago H. R. Costa durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura </a> . Visite meu <a href="https://github.com/thiagohrcosta"><i className="fab fa-github"></i></a>
      </p>
    </FooterBase>
  );
}

export default Footer;
