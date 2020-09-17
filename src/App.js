import React from 'react';
import Headers from './Header/Headers';
import Article from './Body/Article';
import Footer from './Footer/Footer';
import Api from './componente1/Api';
import BootstrapCarousel from './Body/CarouselPage';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
//import { Button } from 'reactstrap';

//import Home from './Home';
//import List from './Lista';

class App extends React.Component {
    render() {
        return (
        <>
            <div>
                <Headers />
                <BootstrapCarousel />
                <Article />
                <Api />
                <Footer />
            </div>
        </>
        );

    }
}

export default App;