import { Container, Row, Col } from 'react-bootstrap';
import './Calculadora.css';
import { useState } from 'react';

const Calculadora = () => {

  const [result, setResult] = useState(0);
  const [oldResult, setOldResult] = useState (0);
  const [operador, setOperador] = useState ();

  // ADICCIONAR NUMEROS (condicional de zero)
  function inputResult(e){
    var input=e.target.value
    if (result===0) {
      setResult(input)
    } else {
      setResult( result + input);
    }
  }
  // LIMPAR
  function limpar(e) {
    setResult(0);
  }
  // PORCENTAGEM
  function porcentagem() {
    setResult (result / 100);
  }
  // CONVERSOR
  function conversor () {
    if (result > 0) {
      setResult (- result);
    } else {
      setResult(Math.abs(result));
    }
  }
  // ARMAZENA CONTEUDO E 
  function operadorHandler(e) {
    var operadorInput = e.target.value;
    setOperador(operadorInput);
    setOldResult(result);
    setResult(0);
  }
  // FUNCÇÃO DE CALCULO
  function calculate() {
    if(operador === "/") {
      setResult(parseFloat(oldResult) /  parseFloat(result));
    } else if(operador === "X") {
      setResult(parseFloat(oldResult) *  parseFloat(result));
    } else if(operador === "-") {
      setResult(parseFloat(oldResult) -  parseFloat(result));
    } else if(operador === "+") {
      setResult(parseFloat(oldResult) + parseFloat(result));
    }
  }

  return (
    <div className='calculadora'>
      <Container maxWidth="xs">
        <Row>
          <Col md={12}>
            <h1 className="resultado">
              { result }
            </h1>
            {/* FILEIRA 01 */}
            <button className="btn-cinza" onClick={limpar}>AC</button>
            <button className="btn-cinza" onClick={conversor}>+/-</button>
            <button className="btn-cinza" onClick={porcentagem}>%</button>
            <button className="btn-laranja" onClick={operadorHandler} value={"/"}>/</button>
            {/* FILEIRA 02 */}
            <button className="numero" onClick={inputResult} value={7}>7</button>
            <button className="numero" onClick={inputResult} value={8}>8</button>
            <button className="numero" onClick={inputResult} value={9}>9</button>
            <button className="btn-laranja" onClick={operadorHandler} value={"X"}>X</button>
            {/* FILEIRA 03 */}
            <button className="numero" onClick={inputResult} value={4}>4</button>
            <button className="numero" onClick={inputResult} value={5}>5</button>
            <button className="numero" onClick={inputResult} value={6}>6</button>
            <button className="btn-laranja" onClick={operadorHandler} value={"-"}>-</button>
            {/* FILEIRA 04 */}
            <button className="numero" onClick={inputResult} value={1}>1</button>
            <button className="numero" onClick={inputResult} value={2}>2</button>
            <button className="numero" onClick={inputResult} value={3}>3</button>
            <button className="btn-laranja" onClick={operadorHandler} value={"+"}>+</button>
            {/* FILEIRA 03 */}
            <button className="numero lastLine" onClick={inputResult} value={0}>0</button>
            <button className="btn-cinza" onClick={inputResult} value={"."}>,</button>
            {/* UTILIZAR PONTO NO VALUE! */}
            <button className="btn-laranja" onClick={calculate}>=</button>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calculadora;
