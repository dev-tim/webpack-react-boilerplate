import React, { Component } from 'react';
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader';
import { fetchJobsAction, addJobItemAction, deleteJobItemAction } from './actions/jobs-actions'

class App extends Component {

  componentWillMount(){
    debugger;
    this.props.fetchJobsList()
  }

  getJobDescription(jobs = []){
    return jobs.map((jobItem, i) => {
      return <li class="list-group-item" key={i}>{jobItem.name}</li>
    })
  }

  addJobItem(){
    this.props.addJobPost({
      id: Date.now(),
      name: "New job" + (new Date(Date.now()).toLocaleString())
    })
  }

  render() {
    const jobs = this.props.jobs;
    debugger;
    return <div>
      <div>
        <button className="btn" onClick={this.addJobItem.bind(this)}>Add</button>
      </div>
      <ul class="list-group">
        {this.getJobDescription(jobs)}
      </ul>
    </div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobsList: () => {
      dispatch(fetchJobsAction())
    },
    addJobPost: (jobPost) => {
      dispatch(addJobItemAction(jobPost))
    },
    deleteJobItemAction: id => {
      dispatch(deleteJobItemAction(id));
    },
    boo: () => alert()
  }
}

const mapStateToProps = state => {
  const j = state.jobsReducer.jobs
  debugger;
  return {
    jobs: j
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((App));
