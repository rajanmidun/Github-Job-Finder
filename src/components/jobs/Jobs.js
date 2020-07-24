import React, { useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import JobContext from '../../context/jobs/jobContext';
import Spinner from '../layouts/Spinner';

const Jobs = () => {
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const jobContext = useContext(JobContext);
  const { jobs, loading, getJobs } = jobContext;

  if (loading)
    return <Spinner />

  return !loading && jobs.length > 0 ? jobs.map(job => {
    const { id, company, company_logo, title, location } = job;
    return <Card key={id} className='job-container' >
      <Card.Body className='job-body'>
        <Card.Title className='job-title'>Title: {title}</Card.Title>
        <Card.Text>Company:{company}</Card.Text>
        <Card.Text className='job-location'>Location:  {location}    </Card.Text>
        <Link to={`/job/${id}`} className='job-button'>More...</Link>
      </Card.Body>
      <Card.Img variant="top" src={company_logo} className='job-img' />
    </Card>
  }) : <div>No job's found</div>
}

export default Jobs
