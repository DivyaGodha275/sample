import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import '../components/Address.css'

function Address() {
  return (
    <Container className='me-5'>
        <Row className='justify-content-center'>
                <div>
                  <h2 className='text-center mb-2'>Timex Stores</h2>  
                </div>
            <Col lg={4} className='main'>
                <div class="card pb-5 ps-2">
                    <h2>Timex stores</h2>
                    <div class="container me-5">
                            <p>Ground Floor</p>
                            <p>Sonipat Road</p>
                            <p>Rohtak - 124001</p>
                            <p>Near Jagmohan Motors</p>
                            <p>Opens at 11:00 AM</p>
                        <div>
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className='main'>
                <div class="card pb-5 ps-2">
                    <h2>Timex stores</h2>
                    <div class="container">
                            <p>Jindal Chowk Raipur Road, Dayanand Colony</p>
                            <p>New Model Town</p>
                            <p>Hisar - 125005</p>
                            <p>Opens at 11:00 AM</p>
                        <div>
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className='main'>
                <div class="card pb-5 ps-2">
                    <h2>Timex stores</h2>
                    <div class="container">
                            <p>Ground Floor, Suvidha Store</p>
                            <p>Kunjpura Road</p>
                            <p>Karnal - 132001</p>
                            <p>Near Canara Bank</p>
                            <p>Opens at 11:00 AM</p>
                        <div>
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                            <Button className="bg-dark btn pe-5 pb-4"></Button>&nbsp;
                        </div>
                    </div>
                </div>
            </Col>
            
        </Row>
    </Container>
  )
}

export default Address
