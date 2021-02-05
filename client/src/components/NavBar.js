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

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="navbar-main" style={{backgroundColor: "lightgrey"}}>
            <Navbar className="navbar navbar-dark navbar-expand-md navbar-no-bg fixed-top" style={{ backgroundColor: "rgba(0,0,0, 0.8)", borderBottom: "rgba(169,169,169,0.1) solid 0.5px" }}>
                <NavbarBrand className="ml-5" href="#top"><span style={{ color: "rgb(59, 180, 255)", textShadow: "#000 0px 0px 1px" }}>Cayman </span><span style={{ color: "rgb(255, 145, 172)", textShadow: "#000 0px 0px 1px" }}>Tomsic</span></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link scroll-link" href="#bio-container">Bio</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link scroll-link" href="#top">SynthApp</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link scroll-link" href="#experience-container">Experience</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link scroll-link" href="#tech-container">Technologies</NavLink>
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                About
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Biography
                                </DropdownItem>
                                <DropdownItem>
                                    Previous Experience
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <div className="mr-5">
                        <NavbarText>
                            <span style={{ color: "rgb(59, 180, 255)", textShadow: "#000 0px 0px 1px" }}>Software Developer</span> and <span style={{ color: "rgb(255, 145, 172)", textShadow: "#000 0px 0px 1px" }}>Musician</span>
                        </NavbarText>
                    </div>
                </Collapse>
            </Navbar>
            {/* DUPLICATED ON PURPOSE: appropriately renders the main content height and still alows fixed to top */}
        </div>
    );
}

export default NavBar;