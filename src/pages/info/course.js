import React, { Component } from 'react'
import {
  Headline1,
  SingleCol,
  Container,
  Col,
} from '../../components/Typography'
import PDF from 'react-pdf-js'
import coursePDF from '../../static/pdf/course-map.pdf'

class Course extends Component {
  render() {
    return (
      <Container>
        <SingleCol>
          <Headline1>Course 2018</Headline1>
          <hr className="my-2" />
          <div
            className="col-md-12 col-sm-12 col-xs-12 text-center"
            css={{ marginBottom: '2em' }}
          >
            <PDF file={coursePDF} fillWidth />
          </div>
        </SingleCol>
      </Container>
    )
  }
}

export default Course
