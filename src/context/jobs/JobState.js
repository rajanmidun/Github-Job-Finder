import React, { useReducer } from 'react';
import axios from 'axios';

import JobReducer from './jobReducer';
import JobContext from './jobContext';

import {
  GET_JOBS,
  GET_JOB,
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR
} from '../types';

const JobState = props => {
  const initialState = {
    jobs: [],
    job: null,
    loading: false,
    error: null
  }

  const BASE_URL = `https://api.allorigins.win/raw?url= https://jobs.github.com/positions.json`;
  const JOB_URL = `https://api.allorigins.win/raw?url= https://jobs.github.com/positions`;

  const [state, dispatch] = useReducer(JobReducer, initialState);

  //  TO GET ALL JOBS
  const getJobs = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await axios.get(BASE_URL, {
        params: { markdown: true }
      });
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    }
    catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.msg
      })
      setTimeout(() => {
        dispatch({
          type: CLEAR_ERROR
        })
      }, 4000);
    }
  }

  // TO GET ONE JOB
  const getJob = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await axios.get(`${JOB_URL}/${id}.json`);
      dispatch({
        type: GET_JOB,
        payload: res.data
      })
    }
    catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.msg
      })
      setTimeout(() => {
        dispatch({
          type: CLEAR_ERROR
        })
      }, 4000);
    }
  }

  // TO SEARCH JOBS
  const searchJob = async (programming) => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await axios.get(`${BASE_URL}?description=${programming}`);
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    }
    catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.msg
      })
      setTimeout(() => {
        dispatch({
          type: CLEAR_ERROR
        })
      }, 4000);
    }
  }

  return <JobContext.Provider
    value={{
      jobs: state.jobs,
      job: state.job,
      loading: state.loading,
      error: state.error,
      getJobs,
      getJob,
      searchJob
    }}>
    {props.children}
  </JobContext.Provider>
}

export default JobState;