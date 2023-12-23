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
                title
            }
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 border-[2px] border-teal-400">
            <div className='flex items-center justify-between'>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>

                <div className='flex items-center gap-8'>
                    {loggedIn && <Button onClick={() => handleButtonClick("responses")} variant='primary'>
                        <span className='text-white'>View Responses &#8594;</span>
                    </Button>
                    }

                    <Button onClick={() => handleButtonClick("apply")} variant='teal'>
                        <span className='text-white'>Apply Job  &#8594;</span>
                    </Button>
                </div>

            </div>
            <p className="text-gray-600 mb-2">Company: {company}</p>
            <p className="text-gray-600 mb-2">Location: {location}</p>
            <p className="text-gray-600 mb-2">Job Type: {jobType}</p>
            <p className="text-gray-600 mb-4">Created By: {createdBy}</p>

            <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Description:</p>
                <p className="text-gray-600">
                    {description.map((data: string, index: number) => (
                        <p key={index}>{data}</p>
                    ))}
                </p>
            </div>

            <div>
                <p className="text-gray-700 font-semibold mb-2">Requirements:</p>
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
