import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Log in
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className="nav-link">MAN-QUOTER</Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
   
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
    </Navbar>
    )
  }
}

export default withRouter(Landing)
