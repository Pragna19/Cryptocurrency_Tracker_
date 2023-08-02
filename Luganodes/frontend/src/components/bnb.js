import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios"
import { useEffect, useState } from "react";
import ChartComponentTHT from './ChartComponentTHT';


function BNB() {
    const alertMessage=()=>{
        alert("Price triggered");
    }

    const [cryptoPrices, setCryptoPrices] = useState({});
    useEffect(()=>{
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=bnb&tsyms=USD,JPY,EUR')
        .then((response)=>{console.log(response.data)
            setCryptoPrices(response.data)
            if(response.data.USD>29250){alertMessage()}
        })
        .catch(error=>console.log(error))
    },[])

    

    return (
        <div style={{background:'#F6FFEE'}}>
            <Container style={{padding:'5%',background:'#F6FFEE'}}>
            <Navbar style={{position:"absolute",left:"0px",right:"0px",top:"0px",background: "#F6FFEE"}}>
                <Container>
                    <Navbar.Brand href="#home" style={{color:"#676565",fontWeight:"400",fontStyle:"normal",fontFamily:"Fredoka One",fontSize:"48px",lineHeight:"58px"}}>BNB</Navbar.Brand>
                </Container>
            </Navbar>
            <br></br>
            <Row style={{textAlign:'center',justifyContent:'space-evenly'}}>
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
                    <Card border="success" style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>BNB</Card.Title>
                        <Card.Text>{cryptoPrices.BNB}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <div>
                    <ChartComponentTHT/>
                </div>
            </Container>
        </div>
    );
  }
  
  export default BNB;