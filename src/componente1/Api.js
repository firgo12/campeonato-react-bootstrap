import React from 'react';

class Api extends React.Component {
    state = {
        Resposta: []
    };
    componentDidMount() {
        fetch('https://api.sheety.co/efddf6ea6f78075098c875d7de247a81/ranking/campeonato')
        .then(Response => Response.json())
        .then(Response => {
            this.setState({
            Resposta: Response.campeonato
            });
        });
    }

render() {
    return(
        <>
        <ul>
                {this.state.Resposta.map(item => (
                     <li key={item.id}>
                        <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">
                                    Treinador
                                </th>
                                <th scope="col">
                                    Classificação
                                </th>
                                <th scope="col">
                                    Pontos
                                </th>
                            </tr>
                            </thead>
                           
                            <tbody>
                                <tr>
                                <td> {item.treinadores}</td>
                                <td> {item.classificação} </td>
                                <td> {item.pontos}</td>
                                </tr>
                            </tbody>
                    </table>
                    </li>
                ))}
            </ul>
            </>
    );
                }
}

export default Api;