import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Grid = () => {
  return (
    <div>
      <Container fluid='xxl'>
        <Row className='mainbox'>
          <Col xs={3} className='box'>
            <Row className='mainbox'>
              <Col className='box'>
                <Row className='mainbox'>
                  <Col className='box'>11</Col>
                  <Col className='box'>11</Col>
                </Row>
              </Col>
              <Col className='box'>11</Col>
            </Row>
          </Col>
          <Col xs={3} className='box'>2</Col>
          <Col xs={3} className='box'>3</Col>
          <Col xs={3} className='box'>4</Col>
          <Col className='box'>5</Col>
          <Col className='box'>6</Col>
          <Col className='box'>7</Col>
          <Col className='box'>8</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Grid
