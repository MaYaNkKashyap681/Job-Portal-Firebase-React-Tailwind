import { useState, useEffect } from 'react';
import { db } from '../../../config/firebase.config';
import { toast } from 'react-toastify';
import { collection, getDocs, query } from 'firebase/firestore';
import JobListingCard from './JobListingCard';
import { useAuthStatus } from '../../../shared/hooks/useAuthStatus';

export interface JobListingProps {
  id: string;
  company: string;
  createdBy: string;
  description: string[];
  jobType: string;
  link: string;
  location: string;
  requirements: string[];
  title: string;
  loggedIn: boolean;
}

const JobListings = () => {
  const [jobListings, setJobListings] = useState<any>([]);

  const { loggedIn } = useAuthStatus();
  const fetchJobs = async () => {
    try {
      const listingsRef = collection(db, 'jobListings');
      const q = query(listingsRef);
      const querySnap = await getDocs(q);
      let jobsData: any[] = [];
      querySnap.forEach((doc) => {
        jobsData.push({ id: doc.id, ...doc.data() });
      });
      setJobListings(jobsData);
    } catch (err) {
      toast.error('Fetching is Failed!');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="mx-auto min-h-screen w-[90%] rounded-t-[2rem] bg-white p-4 pt-8">
      {jobListings.map((item: JobListingProps, index: number) => (
        <JobListingCard
          key={index}
          {...item}
          loggedIn={loggedIn ? true : false}
        />
      ))}
    </div>
  );
};

export default JobListings;
