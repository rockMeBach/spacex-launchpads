import * as React from "react";
import { Navbar, Container } from "react-bootstrap";

function SiteNavbar() {
  return (
    <div className="site-navbar" style={{marginBottom: 30}}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Spacex Launchpads</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default SiteNavbar;