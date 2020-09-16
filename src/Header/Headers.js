import React, { useState } from 'react';
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
                <NavbarBrand href="/">Liga Pokmon</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://celke.com.br/">Torneio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/firgo12/campeonato-react-bootstrap">Repositório</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Opções
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Ranking
                  </DropdownItem>
                                <DropdownItem>
                                    Times
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    About Us
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