import React from 'react';
import './Table.scss';

// Tabela IMC
const Table = () => {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo de 18,5</td>
          <td>Abaixo do peso</td>
        </tr>
        <tr>
          <td>Entre 18,5 e 24,9</td>
          <td>Peso normal</td>
        </tr>
        <tr>
          <td>Entre 25,0 e 29,9</td>
          <td>Sobrepeso</td>
        </tr>
        <tr>
          <td>Entre 30,0 e 34,9</td>
          <td>Obesidade grau I</td>
        </tr>
        <tr>
          <td>Entre 35,0 e 39,9</td>
          <td>Obesidade grau II</td>
        </tr>
        <tr>
          <td>Maior que 40,0</td>
          <td>Obesidade graus III e IV</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
