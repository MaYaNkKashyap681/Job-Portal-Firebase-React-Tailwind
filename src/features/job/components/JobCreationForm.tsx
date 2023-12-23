import React, { useEffect } from 'react';
import { useState } from 'react';
import InputField from '../../../shared/components/ui/InputField';
import { toast } from 'react-toastify';
import { createJob } from '../services/create-job-service';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../shared/components/ui/Loading';
import { userUpdatedJob } from '../services/user-update-service';
import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../../config/firebase.config';
import { getAuth } from 'firebase/auth';

const JobCreationForm = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [jobtype, setJobtype] = useState<string>('Part Time');
  const [aboutDesc, setAboutDesc] = useState<string>('');
  const [reqDesc, setReqDesc] = useState<string>('');
  const [company, setCompany] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsPending(true);

      const res = await createJob({
        role,
        location,
        jobtype,
        aboutDesc,
        reqDesc,
        company,
      });

      if (res) {
        const updated = await userUpdatedJob();
        if (updated) {
          toast.success('Job created successfully!');
          navigate('/jobs');
        }
      }
    } catch (err) {
      toast.error('Job not Added');
    } finally {
      setIsPending(false);
    }
  };

  const hasUserAlreadyPosted = async () => {
    const auth = getAuth();
    const userEmail = auth.currentUser?.email;

    if (userEmail) {
      const q = query(collection(db, 'users'), where('email', '==', userEmail));
      const snapshot = await getDocs(q);
      let userData: any[] = [];
      snapshot.forEach((doc) => {
        // Add a property to the doc for easier access in our components
        userData.push(doc.data());
      });
      console.log(userData);

      if (userData[0].hasJobPosted) {
        navigate('/');
        toast('Cannot Post more Than one job');
      }
    }
  };

  useEffect(() => {
    hasUserAlreadyPosted();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="font-nunito mx-auto w-full">
        <div className="mb-4">
          <InputField
            type="text"
            name="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Software Developer"
            label="Job Role"
            error={false}
          />
        </div>

        <div className="mb-4">
          <InputField
            type="text"
            name="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Google"
            label="Organization/Company"
            error={false}
          />
        </div>

        <div className="mb-4">
          <InputField
            type="text"
            label="Job Location"
            name="location"
            value={location}
            placeholder="Bangalore"
            onChange={(event) => setLocation(event.target.value)}
            error={false}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="text-xl">
            Job Type
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="part-time"
              name="jobtype"
              value="Part Time"
              checked={jobtype === 'Part Time'}
              onChange={(event) => setJobtype(event.target.value)}
              required
              className="mr-2"
            />
            <label htmlFor="part-time" className="mr-6">
              Part Time
            </label>
            <input
              type="radio"
              id="full-time"
              name="jobtype"
              value="Full Time"
              checked={jobtype === 'Full Time'}
              onChange={(event) => setJobtype(event.target.value)}
              required
              className="mr-2"
            />
            <label htmlFor="full-time">Full Time</label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="aboutDesc" className="text-xl">
            ABOUT JOB ROLE {'{Seperated By commas (,)}'}:
          </label>
          <textarea
            id="aboutDesc"
            name="aboutDesc"
            value={aboutDesc}
            onChange={(event) => setAboutDesc(event.target.value)}
            required
            className="w-full rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="reqDesc" className="text-xl">
            REQUIREMENTS {'{Seperated By commas (,)}'}:
          </label>
          <textarea
            id="reqDesc"
            name="reqDesc"
            value={reqDesc}
            onChange={(event) => setReqDesc(event.target.value)}
            required
            className="w-full rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="focus:shadow-outline-blue w-full rounded-full bg-teal-400 px-4 py-2 font-bold text-white hover:bg-teal-300 focus:outline-none"
          >
            {isPending ? <Loading /> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobCreationForm;
