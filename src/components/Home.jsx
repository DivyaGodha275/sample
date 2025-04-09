import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Home1 from '../assets/home1.webp'
import Home2 from '../assets/home2.webp'
import Home3 from '../assets/home3.webp'
import Home4 from '../assets/home4.webp'


function Home() {
  return (
  <div>
        <Container fluid>
            <Row>
                <Carousel fluid>
                <Carousel.Item className='four'>
                    <Image src={Home2} style={{width:'100rem'}} className='img-fluid'/>
                
                </Carousel.Item>
                <Carousel.Item className="pink">
                    <Image src={Home3} style={{width:'100rem'}} fluid/>
                
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={Home1} style={{width:'100rem'}} fluid />
                    
        
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={Home4} style={{width:'100rem'}} fluid/>
                
                </Carousel.Item>
                </Carousel>
            </Row>
        </Container>

  </div>
  )
}

export default Home
