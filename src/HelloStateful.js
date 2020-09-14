import React from 'react'; 

class HelloStateful extends React.Component {
    state = {
        clicou: 'ainda não clicou'
    }

    handleClick() {
        this.setState({
            clicou: 'clicou'
        });
    }

    render() {
        return (
            <div>
                Olá, {this.props.nome} você {this.state.clicou}.

                <button onClick={this.handleClick.bind(this)}>Clique aqui</button>
            </div>
        );
    }
}

export default HelloStateful;