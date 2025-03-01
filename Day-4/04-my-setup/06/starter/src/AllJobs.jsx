import React from 'react'
import SingleJob from './SingleJob'

const AllJobs = ({jobs}) => {
  
  return (
    <div>
        {jobs.map((job)=>(<SingleJob key={job.id} {...job} />))}
    </div>
  )
}

export default AllJobs