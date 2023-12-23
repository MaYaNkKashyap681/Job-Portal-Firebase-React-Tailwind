import React from 'react';
import { JobListingProps } from './JobListings';
import Button from '../../../shared/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const JobListingCard: React.FC<JobListingProps> = ({
  id,
  company,
  createdBy,
  description,
  jobType,
  location,
  requirements,
  title,
  loggedIn,
}) => {
  const navigate = useNavigate();

  // Usage
  const handleButtonClick = (location: string) => {
    navigate(`/${location}/${id}`, {
      state: {
        company,
        title,
      },
    });
  };

  return (
    <div className="mb-4 rounded-lg border-[2px] border-teal-400 bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>

        <div className="flex items-center gap-8">
          {loggedIn && (
            <Button
              onClick={() => handleButtonClick('responses')}
              variant="primary"
            >
              <span className="text-white">View Responses &#8594;</span>
            </Button>
          )}

          <Button onClick={() => handleButtonClick('apply')} variant="teal">
            <span className="text-white">Apply Job &#8594;</span>
          </Button>
        </div>
      </div>
      <p className="mb-2 text-gray-600">Company: {company}</p>
      <p className="mb-2 text-gray-600">Location: {location}</p>
      <p className="mb-2 text-gray-600">Job Type: {jobType}</p>
      <p className="mb-4 text-gray-600">Created By: {createdBy}</p>

      <div className="mb-4">
        <p className="mb-2 font-semibold text-gray-700">Description:</p>
        <p className="text-gray-600">
          {description.map((data: string, index: number) => (
            <p key={index}>{data}</p>
          ))}
        </p>
      </div>

      <div>
        <p className="mb-2 font-semibold text-gray-700">Requirements:</p>
        <p className="text-gray-600">
          {requirements.map((data: string, index: number) => (
            <p key={index}>{data}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default JobListingCard;
