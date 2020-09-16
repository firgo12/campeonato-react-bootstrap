import React from 'react';

function HelloStateless(props) {
    return (
        <div
            style={{ fontWeight: 'bold', fontSize: '18px',  }}
        >
            Olá, {props.nome}
        </div>
    )
}

export default HelloStateless;