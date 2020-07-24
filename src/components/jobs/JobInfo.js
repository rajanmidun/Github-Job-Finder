import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import JobContext from '../../context/jobs/jobContext';
import Spinner from '../layouts/Spinner';

const JobInfo = (props) => {
  const jobContext = useContext(JobContext);
  const { getJob, job, loading } = jobContext;
  useEffect(() => {
    const id = props.match.params.id;
    if (job) {
      if (job.id !== id) {
        getJob(id);
      }
    }
    else {
      getJob(id);
    }
    // eslint-disable-next-line
  }, [loading]);


  if (loading)
    return <Spinner />
  else if (!loading && job) {
    const { company, created_at, how_to_apply, type, location, company_logo, title, description } = job;
    return <Container>
      <Row>
        <Col sm={8}>
          <Card>
            <Card.Title className='job-title title'>{title}</Card.Title>
            <Card.Body className='job-description' dangerouslySetInnerHTML={{ __html: description }}></Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card.Img ariant="top" src={company_logo}></Card.Img>
          <Card >
            <Card.Header className="text-center">Other Info</Card.Header>
            <Card.Body>
              <Card.Text>Company: {company}</Card.Text>
              <Card.Text>Location: {location}</Card.Text>
              <Card.Text>Type: {type}</Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{created_at}</Card.Footer>
          </Card>
          <br /> <br />
          <Card >
            <Card.Header className="text-center">How To Apply</Card.Header>
            <Card.Body dangerouslySetInnerHTML={{ __html: how_to_apply }}>
            </Card.Body>
            <Card.Footer className="text-muted">{created_at}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  }
  else {
    return <div>Job Not found</div>
  }
}

export default JobInfo
