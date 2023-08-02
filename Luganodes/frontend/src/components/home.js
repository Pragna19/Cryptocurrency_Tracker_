// Importing necessary modules and components from React and react-bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useLocation } from 'react-router-dom';

// Home functional component
function Home() {
  const location = useLocation(); // Getting the current location using the useLocation hook

  // Rendering the home component
  return (
    <div style={{ padding: "0%", margin: "0%", background: "#F6FFEE" }}>
      {/* Navbar for the application */}
      <Navbar style={{ padding: "2%", position: "absolute", left: "0px", right: "0px", top: "0px", background: "#F6FFEE" }}>
        <Container>
          {/* Brand name for the application */}
          <Navbar.Brand href="#home" style={{ color: "#676565", fontWeight: "500", fontStyle: "normal", fontFamily: "Fredoka One", fontSize: "48px", lineHeight: "58px" }}>Cryptocurrency Tracker</Navbar.Brand>
          <Nav>
            {/* Navigation links */}
            <Nav.Link href="/" style={{ color: "#676565", fontWeight: "500", fontStyle: "normal", fontFamily: "Ubuntu", fontSize: "28px", lineHeight: "37px" }}>Updates</Nav.Link>
            <Nav.Link href="SignUp" style={{ color: "#676565", fontWeight: "500", fontStyle: "normal", fontFamily: "Ubuntu", fontSize: "28px", lineHeight: "37px" }}></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container style={{ padding: "5%", background: "#F6FFEE", margin: '0%', marginLeft: "1px" }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* Row containing cryptocurrency cards */}
        <Row style={{ textAlign: "center", justifyContent: 'space-evenly' }}>
          {/* Card for BitCoin */}
          <Col onClick={() => window.location.href = "/home/BitCoin"} xs={6} md={4} lg={3} style={{}}>
            <Card style={{ width: "100%", height: "100%", border: "none", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
              <Card.Img variant="top" src="./bitcoin.png" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
              <Card.Body style={{}}>
                <Card.Text style={{ fontSize: "1.25rem", fontWeight: "bold" }}>BitCoin</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Card for Ethereum */}
          <Col onClick={() => window.location.href = "/home/Ethereum"} xs={6} md={4} lg={3} style={{}}>
            <Card style={{ width: "100%", height: "100%", border: "none", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
              <Card.Img variant="top" src="./Ethereum.png" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
              <Card.Body style={{}}>
                <Card.Text style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Ethereum</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Card for Tether */}
          <Col onClick={() => window.location.href = "/home/Tether"} xs={6} md={4} lg={3} style={{}}>
            <Card style={{ width: "100%", height: "100%", border: "none", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
              <Card.Img variant="top" src="./tether.png" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
              <Card.Body>
                <Card.Text style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Tether</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </div>
  );
}

// Exporting the Home component to be used in other parts of the application
export default Home;