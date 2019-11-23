import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class Landing extends Component {
  render() {
    return (

      <Jumbotron fluid>
  <Container>
    <h1>Man-Quoter</h1>
    <p>Need a quote for a job?<br/>
      Negotiation not your strong suit?<br/>
      Sick of getting ripped off by tradies?<br/>
      Let Man-Quoter handle it!
    </p>
  </Container>
</Jumbotron>

       
    )
  }
}

export default Landing
