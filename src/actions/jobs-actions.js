import { FETCH_JOB_LIST, ADD_JOB_POSTING, DELETE_JOB_POSTING } from '../constants';

export function fetchJobsAction(){
    return {
        type: FETCH_JOB_LIST,
        jobs : [{
            id: 1,
            name: "JS Dev"
        },{
            id: 2,
            name: "C# Dev"
        },{
            id: 3,
            name: "Java Dev"
        }]
    }
}

export function addJobItemAction(jobItem){
    return {
        type: ADD_JOB_POSTING,
        jobItem: jobItem
    }
}

export function deleteJobItemAction(id){
    return {
        type: DELETE_JOB_POSTING,
        id
    }
}