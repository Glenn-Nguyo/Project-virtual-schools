import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Schools from './Schools';
import Enroll from './Enroll';
import About from './About';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">E-Masomo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/schools">Schools</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/enroll">Enroll</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/enroll">
                            <Enroll/>
                        </Route>
                        <Route path="/">
                            <Schools />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
