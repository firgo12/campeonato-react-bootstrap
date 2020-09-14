import React from 'react';

class List extends React.Component {
    state = {
        Resposta: []
    };
    componentDidMount() {
        fetch('https://api.sheety.co/21304639aa0f1abef5bde8395b1c48df/planilhaSemT%C3%ADtulo/campeonato')
        .then(Response => Response.json())
        .then(Response => {
            this.setState({
            Resposta: Response.campeonato
            });
        });
    }

render() {
    return(
        <div className= "container">
            <h1>
                Treinadores
            </h1>
            <div></div>
            <ul>
                {this.state.Resposta.map(item => (
                    <li key={item.id}>
                        <p><b>Treinador:</b> {item.treinadores}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
                }
}

export default List;