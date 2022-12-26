import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImc } from '../redux/reducer/imc';
import './Inputs.scss';

const Inputs = () => {
  const [imc, setImcs] = useState({
    peso: 0,
    altura: 0,
  });

  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setImcs({ ...imc, [id]: value });
    setError({
      status: false,
      message: '',
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { peso, altura } = imc;

    const checkPeso = peso <= 0 || peso > 300;
    const checkAltura = altura <= 0 || altura > 3;

    if (checkPeso && checkAltura) {
      setError({
        status: true,
        message: 'Valores invalidos',
      });
      return;
    }

    const imcs = (peso / (altura * altura)).toFixed(2);
    dispatch(setImc(imcs));

    setImcs({
      peso: 0,
      altura: 0,
    });
  };

  return (
    <form className="Inputs" onSubmit={handleClick}>
      <label htmlFor="peso">Peso</label>
      <input type="number" id="peso" onChange={handleChange} value={imc.peso} />
      <label htmlFor="altura">Altura</label>
      <input type="number" id="altura" onChange={handleChange} value={imc.altura} />
      <button type="submit">Calcular</button>
      {error.status && <p>{error.message}</p>}
    </form>
  );
};

export default Inputs;
