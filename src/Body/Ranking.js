import React from 'react';
import { Table } from 'reactstrap';

const Ranking = (props) => {
  return (
    <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Classificação</th>
        <th scope="col">Treinadores</th>
        <th scope="col">Pontuação</th>       
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1º</th>
        <td>Red</td>
        <td>1600</td>
      </tr>
      <tr>
        <th scope="row">2º</th>
        <td>Ethan</td>
        <td>1500</td>
      </tr>
      <tr>
        <th scope="row">3º</th>
        <td>Brendan</td>
        <td>1400</td>
      </tr>
      <tr>
        <th scope="row">4º</th>
        <td>Ash</td>
        <td>1300</td>
      </tr>
      <tr>
        <th scope="row">5º</th>
        <td>Lance</td>
        <td>1200</td>
      </tr>
      <tr>
        <th scope="row">6º</th>
        <td>Gary</td>
        <td>1100</td>
      </tr>
      <tr>
        <th scope="row">7º</th>
        <td>Giovanni</td>
        <td>1000</td>
      </tr>
      <tr>
        <th scope="row">8º</th>
        <td>Misty</td>
        <td>900</td>
      </tr>
      <tr>
        <th scope="row">9º</th>
        <td>Dawn</td>
        <td>800</td>
      </tr>
      <tr>
        <th scope="row">10º</th>
        <td>May</td>
        <td>700</td>
      </tr>
      <tr>
        <th scope="row">11º</th>
        <td>Brock</td>
        <td>600</td>
      </tr>
      <tr>
        <th scope="row">12º</th>
        <td>Kenta</td>
        <td>500</td>
      </tr>
      <tr>
        <th scope="row">13º</th>
        <td>Paul</td>
        <td>400</td>
      </tr>
      <tr>
        <th scope="row">14º</th>
        <td>Jessie</td>
        <td>300</td>
      </tr>
      <tr>
        <th scope="row">15º</th>
        <td>Whitney</td>
        <td>200</td>
      </tr>
      <tr>
        <th scope="row">16º</th>
        <td>James</td>
        <td>100</td>
      </tr>
    </tbody>
  </table>
  );
}

export default Ranking;
