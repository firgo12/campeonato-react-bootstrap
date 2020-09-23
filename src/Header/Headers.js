import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Ranking from '../Body/Ranking';
import Times from '../componente1/Times';
import Nos from '../componente1/AboutUs';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
         
                <div>
                    <Navbar color="primary" dark expand="md">
                        <NavbarBrand href="/">PokeChampions</NavbarBrand>
                        <NavbarToggler onClick={toggle} />

                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/firgo12/campeonato-react-bootstrap">Repositório</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Opções
                </DropdownToggle>
                                    <DropdownMenu right>

                                        <DropdownItem>
                                            <Link to="/">Torneio </Link>
                                        </DropdownItem>

                                        <DropdownItem>
                                            <Link to='/Ranking'> Ranking </Link>
                                        </DropdownItem>

                                        <DropdownItem>
                                            <Link to='/Times'>  Times     </Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to='/AboutUs'> About Us </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>

                            <NavbarText></NavbarText>
                            <input type="search" class="search-input" placeholder="  Buscar Treinador..." id="nome"></input>
                            <button class="search-button"><b>Buscar</b></button>
                        </Collapse>
                    </Navbar>
                </div>
          
        </>
    );
}


export default Headers;