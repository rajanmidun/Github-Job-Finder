import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


import JobContext from '../../context/jobs/jobContext';

const Navbar = () => {
  const jobContext = useContext(JobContext);
  const { searchJob } = jobContext;

  return (
    <header>
      <h3><Link to='/'>Github Job Finder</Link> </h3><nav>
        <form>
          <input type='text' placeholder='Job title/pl' onChange={(e) => searchJob(e.target.value)} />
        </form>
      </nav>
    </header>
  )
}

export default Navbar
