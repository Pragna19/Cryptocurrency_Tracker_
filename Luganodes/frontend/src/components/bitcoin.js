// Importing necessary modules from react-bootstrap and other libraries
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import ChartComponentBTC from './ChartComponentBTC';

// Defining a functional component called BTC
function BTC() {
    // Function to display an alert message
    const alertMessage = () => {
        alert("Price triggered");
    }

    // Initializing a state variable to hold cryptoPrices data
    const [cryptoPrices, setCryptoPrices] = useState({});

    // useEffect hook is used to fetch data from an API when the component mounts
    useEffect(() => {
        // Fetching crypto price data for BTC in USD, JPY, and EUR
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
            .then((response) => {
                console.log(response.data); // Logging the API response data
                setCryptoPrices(response.data); // Updating the state with API response data
                if (response.data.USD > 29250) {
                    alertMessage(); // Calling the alertMessage function if USD price is greater than 29250
                }
            })
            .catch(error => console.log(error)); // Handling errors if the API request fails
    }, []);

    // Rendering the BTC component
    return (
        <div style={{ background: '#F6FFEE' }}>
            <Container style={{ padding: '5%', background: '#F6FFEE' }}>
                <Navbar style={{ position: "absolute", left: "0px", right: "0px", top: "0px", background: "#F6FFEE" }}>
                    <Container>
                        <Navbar.Brand href="#home" style={{ color: "#676565", fontWeight: "400", fontStyle: "normal", fontFamily: "Fredoka One", fontSize: "48px", lineHeight: "58px" }}>BitCoin</Navbar.Brand>
                    </Container>
                </Navbar>
                <br></br>
                <Row style={{ textAlign: 'center', justifyContent: 'space-evenly' }}>
                    {/* Displaying cards to show crypto prices in USD, EUR, and JPY */}
                    <Card border="success" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>USD</Card.Title>
                            <Card.Text>{cryptoPrices.USD}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>EUR</Card.Title>
                            <Card.Text>{cryptoPrices.EUR}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="success" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>JPY</Card.Title>
                            <Card.Text>{cryptoPrices.JPY}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <div>
                    {/* Rendering the ChartComponentBTC component */}
                    <ChartComponentBTC />
                </div>
            </Container>
        </div>
    );
}

// Exporting the BTC component to be used in other parts of the application
export default BTC;