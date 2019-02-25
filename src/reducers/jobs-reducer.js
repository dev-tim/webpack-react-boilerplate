import { FETCH_JOB_LIST, ADD_JOB_POSTING, DELETE_JOB_POSTING } from '../constants'

const initialState = {
  jobs: []
}

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOB_LIST:
      debugger;
      return Object.assign({}, state, {jobs: action.jobs});
    case ADD_JOB_POSTING:
      return Object.assign({}, 
        state, {
          jobs: [...(state.jobs), action.jobItem]
        });
    case DELETE_JOB_POSTING:
      return {};
    default:
      return state
  }
}

export default jobsReducer;