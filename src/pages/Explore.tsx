import JobListings from '../features/job/components/JobListings';

const Explore = () => {
  return (
    <div className="min-h-screen bg-teal-400">
      <h3 className="p-8 text-[6rem] font-bold text-white">Job Listings.</h3>
      <JobListings />
    </div>
  );
};

export default Explore;
