import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Resultado.scss';

const Resultado = () => {
  const [situation, setSituation] = useState({
    status: false,
    message: '',
  });

  const imc = useSelector((state) => state.imc.imc);

  useEffect(() => {
    switch (true) {
      case imc < 18.5 && imc > 0:
        setSituation({
          status: true,
          message: 'Abaixo do peso',
        });
        break;
      case imc >= 18.5 && imc <= 24.9:
        setSituation({
          status: true,
          message: 'Peso normal',
        });
        break;
      case imc >= 25 && imc <= 29.9:
        setSituation({
          status: true,
          message: 'Sobrepeso',
        });
        break;
      case imc >= 30 && imc <= 34.9:
        setSituation({
          status: true,
          message: 'Obesidade grau 1',
        });
        break;
      case imc >= 35 && imc <= 39.9:
        setSituation({
          status: true,
          message: 'Obesidade grau 2',
        });
        break;
      case imc >= 40:
        setSituation({
          status: true,
          message: 'Obesidade grau 3',
        });
        break;
      default:
        setSituation({
          status: false,
          message: '',
        });
    }
  }, [imc]);

  return (
    <div className="Resultado">
      <h2>Resultado</h2>
      <p>Seu IMC é: {imc > 0 ? imc : ''}</p>
      <p>Situacao: {situation.status ? situation.message : ''}</p>
    </div>
  );
};

export default Resultado;
