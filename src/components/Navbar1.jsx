import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { IoGiftSharp } from "react-icons/io5";
import Form from 'react-bootstrap/Form';

import { BsMinecartLoaded } from "react-icons/bs";




function Navbar1() {
  return (
   <Container fluid>
    <Row>
         <nav class=" bg-danger text-white d-flex pt-2 ">
         <marquee>
            <p>Get extra 10% off on minimum purchase of INR 10,000  Use Code:<b>Extra10</b>
            
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Register now enjoy a 10% discount:NEWUSER10<br />
            
            </p>

        </marquee>
         </nav>
    </Row>
    <Row>
        <Navbar bg="white" >
            <Container fluid>
                <Nav className='me-auto' lg={6} xs={12}>
                <Nav.Link href="#cards"><b> Watches</b></Nav.Link>
                    <Nav.Link href="#gifts"><IoGiftSharp className='text-danger fs-4.3'/><b>Gifts</b></Nav.Link>
                    <Nav.Link href="/Collections"><b>Collections</b></Nav.Link>
                    <Nav.Link href="/Colabs"><b>Co-Labs</b></Nav.Link>
                </Nav>
                <Nav className="ms-auto " lg={6} md={0}>
                    <Nav.Link href="#store"><b>Stores</b></Nav.Link>
                    <Nav.Link href="#Blog"><b>Blog</b></Nav.Link>
                    <Nav.Link href="#Explore"><b>Explore</b></Nav.Link>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    <BsMinecartLoaded  className='fs-4'/>

                </Nav>
            </Container>
        </Navbar>
    </Row>
  </Container>
   )
}

export default Navbar1
