import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Store1 from "../assets/store1.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import "../components/Store.css";
import Button from 'react-bootstrap/Button';
import { HiArrowSmallUp } from "react-icons/hi2";
function Store() {
  return (
    <div id="store">
        <Container fluid>
      <Row >
        <Col lg={6}>
          <h2>
            TIMEX <b className="fs-1">170</b>
          </h2>
        </Col>
        <Col className="ms-auto">
          <h5>18004192727 </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Store1} 
          className="fluid image2" style={{ width: "95rem" }}  /><HiArrowSmallUp />
        </Col>
      </Row>
      <Container className="mt-5 mb-5  ">
        <Row className="border items pb-5 ps-5 pt-5 " style={{ height: "350px" }}>
          <p className="text-center">Locate the nearest store(s)</p>
          <Col className="align-items-center justify-content-center ">
            <p>State*</p>
            <Dropdown>
              <Dropdown.Toggle
                className="bg-secondary pe-auto"
                id="dropdown-basic">
                All
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Telangana</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Andra pradesh</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Maharashtra</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Uttar pradesh</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Kolkata</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
                <Dropdown.Item href="#/action-1">TamilNadu</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Kerla</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Madya Pradesh</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Gujarath</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Punjab</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Odisha</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <p>City</p>
            <Dropdown>
              <Dropdown.Toggle
                className="bg-secondary pe-auto"
                id="dropdown-basic">
                All
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Khammam</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hyderabad</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bangolre</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Noida</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Goa</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <p>Locality</p>
            <Dropdown>
              <Dropdown.Toggle
                className="bg-secondary pe-auto"
                id="dropdown-basic">
                All
              </Dropdown.Toggle>
            </Dropdown><br/>
            <div>
                <Button className="bg-dark mb-1 ">Reset</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="dark">Search</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Store;
