import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import '../components/Explore.css'

function Explore() {
  return (
   <Container fluid className='dark'>
    <Row>
      <img width="" height="" src="https://cdn.shopify.com/s/files/1/0787/5375/9521/files/4794_TX_TC24_2_size_hero_banner_desktop.webp?v=1717667962" alt="" class=" ls-is-cached lazyloaded" />
    </Row>
    <Row className='dark'>
        <h1 className='text-white'>it's not a watch,<br/>it's an american icon</h1>
        <p  className='text-white'>In 1854, we combined European clockmaking and American ingenuity to take clocks from the mantels of the 
            1% and bring them to the rest of the world. We disrupted a 300-year-old industry, transforming 
            delicate mantelpieces into accessible wristwatches that could take a licking and keep on ticking. But what truly 
            defines us extends far beyond our heritage - it’s the way our watches 
            have gone from being simple tools to cherished companions. Regardless of how you came to know and love your Timex,
             it does more than just tell time; it tells your story 
            and reminds you to make time yours.</p>
    </Row>
   </Container>
  )
}

export default Explore
