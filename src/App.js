import React from 'react';
import Headers from './Header/Headers';
import Article from './Body/Article';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Ranking from './Body/Ranking';
import Times from './componente1/Times';
import Nos from './componente1/AboutUs';
//import { Button } from 'reactstrap';
// import Api from './componente1/Api';

class App extends React.Component {
    render() {
        return (
        <>
        <BrowserRouter>
            <div>
                <Headers />
                <Route path="/" exact component={Article}></Route>
                <Route path="/Ranking" exact component={Ranking}></Route>
                <Route path="/Times" exact component={Times}></Route>
                <Route path="/AboutUs" exact component={Nos}></Route>
                {/* <Footer /> */}
            </div>
            </BrowserRouter>
        </>
        );
    }
}

export default App;