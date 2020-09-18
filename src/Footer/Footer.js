import React from 'react';
import { Table } from 'reactstrap';

const Footer = (props) => {
  return (
    <>
    <div class="Footer">

    <Table borderless>
      <thead>
          <th>#</th>
          <th>Primeiro Nome</th>
          <th>Sobrenome</th>
          <th>Nome no Git</th>
      </thead>
      <tbody>
          <th scope="row">1</th>
          <td>Guilherme</td>
          <td>Cunha</td>
          <td>Firgo12</td>
        <tr>
          <th scope="row">2</th>
          <td>Giovanni</td>
          <td>Paulino</td>
          <td>Giovanni-Perrotta</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Igor</td>
          <td>Aldivan</td>
          <td>Igor-Aldivan77</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Félix</td>
          <td>Castro</td>
          <td>felix-03</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Juan</td>
          <td>Faria</td>
          <td>Juan Victor Angelo de Faria</td>
        </tr>
      </tbody>
    </Table>

    </div>
    </>
  );
}

export default Footer;