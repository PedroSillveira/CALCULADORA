import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Botoes.css';

const Botoes = () => {

  const numeros = [
    ['AC', '7', '4', '1', '0'],
    ['+/-', '8', '5', '2', '0'],
    ['%', '9', '6', '3', ','],
    ['/', 'X', '-', '+', '='],
  ];

  // Função para renderizar os botões
  const renderNumeros = () =>
    numeros.map((coluna, index) => (
      <Col md={3} key={index} className="p-3">
        {coluna.map((num, idx) => (
          <button
          key={idx}
          className={`${isNaN(num) ? 'btn-sinal' : 'btn-numero'} ${index === 3 ? 'btn-ultima-fileira' : ''}`}
        >
          {num}
        </button>
        ))}
      </Col>
    ));

  return (
    <Container className="botoes">
      <Row className="g-0 justify-content-center">
        <Row>{renderNumeros()}</Row>
      </Row>
    </Container>
  );
};

export default Botoes;
