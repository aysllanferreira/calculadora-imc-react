import React from 'react';

const Inputs = () => {
  return (
    <form>
      <label htmlFor="peso">Peso</label>
      <input type="number" id="peso" />
      <label htmlFor="altura">Altura</label>
      <input type="number" id="altura" />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Inputs;
