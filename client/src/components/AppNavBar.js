import React, { Component } from 'react';
import {Container} from 'reactstrap';
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
  DropdownItem } from 'reactstrap';

  class AppNavBar extends Component{
     state = {
         isOpen:false
     }
     toggle=() =>{
         this.setState({
             isOpen: !this.state.inOpen
         });
     }
     render(){
         return (
            <div>
             <Navbar color="dark" dark expand="sm" className="mb-5">
             <Container>
                 <NavbarBrand href="/">ShoppingList</NavbarBrand>
                 <NavbarToggler onClick={this.toggle} />
                 <Collapse isOpen={this.state.inOpen} navbar>
                 <Nav className="ml-auto" navbar>
                 <NavItem>
                     <NavLink href="#">
                     Github
                     </NavLink>
                 </NavItem>
                 </Nav>
                 </Collapse>
             </Container>
             </Navbar>
         </div>
         )
         
     }
  }

  export default AppNavBar;