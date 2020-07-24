import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

//  USERS COMPONENTS
import Navbar from './components/layouts/Navbar';
import JobState from './context/jobs/JobState';
import Home from './components/pages/Home';
import JobInfo from './components/jobs/JobInfo';

function App() {
  return (
    <JobState>
      <BrowserRouter>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/job/:id' component={JobInfo} />
          </Switch>
        </main>
      </BrowserRouter>
    </JobState>
  );
}

export default App;
