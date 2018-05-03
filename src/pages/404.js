import React from 'react'
import Link from 'gatsby-link'
import { SingleCol, Container } from '../components/Typography'

const ErrorPage = () => {
  return (
    <Container>
      <SingleCol>
        <div class="error-template">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <div class="error-details">
            Sorry, an error has occured, Requested page not found!
          </div>
          <div class="error-actions">
            <Link to="/" class="btn btn-primary btn-lg">
              <span class="glyphicon glyphicon-home" /> Take Me Home
            </Link>
            <Link to="/contact/" class="btn btn-default btn-lg">
              <span class="glyphicon glyphicon-envelope" /> Contact Support
            </Link>
          </div>
        </div>
      </SingleCol>
    </Container>
  )
}

export default ErrorPage
