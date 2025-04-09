import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LiaRupeeSignSolid } from "react-icons/lia";
import First from '../assets/first.avif'
import Second from '../assets/Second.webp'
import Third from '../assets/Third.avif'
import Fourth from '../assets/four.webp'
import Five from '../assets/five.jpg'
import Six from '../assets/six.webp'
import Seven from '../assets/seven.webp'
import Nine from '../assets/nine.webp'
import '../components/Cards.css'

function Watch() {
  return (
  <div id="cards">
     <Container>
    <Row>
        <div>
            <h2 className='text-center'>TIMEX</h2>
            <h3 className='me-auto'>Latest Release</h3>
        </div>
      <Col lg={3} md={6} >
       <Card style={{ width: '18rem',height:'32rem' }} className='image' > 
         <Card.Img  src={First} style={{height:'16rem'}}/>
        <Card.Body>
            <Card.Text>
                <p><b>Waterbury Traditional GMT 39mm Leather Strap Watch</b></p>
                <p className='text-muted'>39 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b className='rupees'><LiaRupeeSignSolid />13,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>14,495</span></b></p>&nbsp;&nbsp;
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
      </Col>
      <Col lg={3} md={6}>
      <Card style={{ width: '18rem' }} className='image' > 
         <Card.Img  src={Second} />
        <Card.Body>
            
            <Card.Text>
                <p><b>Timex E Class Men's Green Dial Round</b></p>
                <p className='text-muted'>44 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b><LiaRupeeSignSolid />8,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>10,495</span></b></p>&nbsp;&nbsp;
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
      </Col>
      <Col lg={3} md={6}>
      <Card style={{ width: '18rem' }} className='image' > 
         <Card.Img    src={Third} style={{height:'16rem'}} />
        <Card.Body>
            <Card.Text>
                <p><b>Marlin® Chronograph Tachymeter 40mm Leather Strap Watch</b></p>
                <p className='text-muted'>48 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b><LiaRupeeSignSolid />10,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>19,495</span></b></p>&nbsp;&nbsp;
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
      </Col>
      <Col lg={3} md={6}>
      <Card style={{ width: '18rem' }} className='image'  > 
         <Card.Img    src={Fourth} />
        <Card.Body>
            <Card.Text>
                <p><b>Timex E Class Men's Green Dial Round</b></p>
                <p className='text-muted'>36 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b><LiaRupeeSignSolid />13,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>15,495</span></b></p>&nbsp;&nbsp;
                    
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
      </Col>
    </Row><br></br>
    <Row>
        <Col lg={3} md={6} sm={12}>
        <Card style={{ width: '18rem' }} className='image' > 
         <Card.Img    src={Five} style={{height:'18rem'}}/>
        <Card.Body>
            <Card.Text>
                <p><b>Timex E Class Men's Black Dial Round Case Automatic Function Watch</b></p>
                <p className='text-muted'>40 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b><LiaRupeeSignSolid />3,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>5,495</span></b></p>&nbsp;&nbsp;
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
        </Col>
        <Col lg={3} md={6} sm={0}>
        <Card style={{ width: '18rem' }} className='image' > 
         <Card.Img    src={Six} />
        <Card.Body>
            <Card.Text>
                <p><b>Timex E Class Men's marun Dial Round Case Automatic Function Watch</b></p>
                <p className='text-muted'>32 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b><LiaRupeeSignSolid />2,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>4,495</span></b></p>&nbsp;&nbsp;
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
        </Col>
        <Col lg={3} md={6} sm={0}>
        <Card style={{ width: '18rem' }} className='image'  > 
         <Card.Img   src={Seven}  style={{height:'19rem'}}/>
        <Card.Body>
            <Card.Text>
                <p><b>Timex Urban Pop x Fortnite® 40mm Bio-TPU Strap Watch</b></p>
                <p className='text-muted'>20 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b><LiaRupeeSignSolid />18,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>20,495</span></b></p>&nbsp;&nbsp;
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
        </Col>
        <Col lg={3} md={6} sm={0}>
        <Card style={{ width: '18rem' }} className='image'  > 
         <Card.Img    src={Nine} style={{height:'19rem'}} />
        <Card.Body>
            <Card.Text>
                <p><b>Q Timex LCA x Fortnite® 35mm Resin Strap Watch</b></p>
                <p className='text-muted'>29 mm</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <p><b><LiaRupeeSignSolid />14,045 <LiaRupeeSignSolid /><span className='text-decoration-line-through'>18,495</span></b></p>&nbsp;&nbsp;&nbsp;
                    <p className='text-danger'>10%</p>
                </div>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
            <Button variant="white">Learn More</Button>
        </Card.Body>
       </Card>
        </Col>
    </Row>

   </Container>

  </div>
  )
}

export default Watch
