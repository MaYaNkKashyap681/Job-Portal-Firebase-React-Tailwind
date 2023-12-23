import React, { useEffect } from 'react'
import JobListings from '../features/job/components/JobListings'


const Explore = () => {
  
  return (
    <div className='min-h-screen bg-teal-400'>
      <h3 className='text-[6rem] font-bold text-white p-8'>Job Listings.</h3>
      <JobListings/>
    </div>
  )
}

export default Explore