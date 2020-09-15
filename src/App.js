import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';

import Home from './Home';
import List from './Lista';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div  className="App">
                    <h1 className="Torneio">Torneio Pokémon</h1>

                    <Link to="/">Torneio</Link> | <Link to="/lista">Times</Link>

                    <Route path="/" exact component={Home}></Route>
                    <Route path="/lista" component={List}></Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;