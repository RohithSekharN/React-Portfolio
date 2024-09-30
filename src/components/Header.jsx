import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBContainer } from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
      <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Rohith Sekhar N</MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Header
