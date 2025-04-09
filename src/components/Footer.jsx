
import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>About Us</h5>
            <p>
              We are a premier online retailer offering a wide selection of premium watches. Our mission is to provide quality timepieces and excellent customer service to watch enthusiasts worldwide.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark border-0">
                <a href="/" className="text-white text-decoration-none">Home</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="/shop" className="text-white text-decoration-none">Gifts</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="/about" className="text-white text-decoration-none">Collections</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="/contact" className="text-white text-decoration-none">Stores</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="/terms" className="text-white text-decoration-none">Blog</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="/privacy" className="text-white text-decoration-none">Explore</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Contact</h5>
            <p>Phone: +916-456-7890</p>
            <p>Email: timex@watchstore.com</p>
          </Col>

          {/* Social Media Section */}
          <Col md={3}>
            <h5>Follow Us</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark border-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                  Facebook
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="https://instagram.com" rel="noopener noreferrer" className="text-white text-decoration-none">
                  Instagram
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="https://twitter.com"  rel="noopener noreferrer" className="text-white text-decoration-none">
                  Twitter
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a href="https://linkedin.com" rel="noopener noreferrer" className="text-white text-decoration-none">
                  LinkedIn
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 WatchStore. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
