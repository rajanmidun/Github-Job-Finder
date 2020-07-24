import {
  GET_JOBS,
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  GET_JOB
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false
      }
    case GET_JOB:
      return {
        ...state,
        job: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}