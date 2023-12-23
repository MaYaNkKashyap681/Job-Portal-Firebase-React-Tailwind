import { useAuthStatus } from '../shared/hooks/useAuthStatus';
import { useNavigate } from 'react-router-dom';
import JobCreationForm from '../features/job/components/JobCreationForm';

const Create = () => {
  const { loggedIn } = useAuthStatus();
  const navigate = useNavigate();
  if (!loggedIn) {
    navigate('/');
  }

  return (
    <div className="bg-secondary1 items-start overflow-x-hidden rounded-xl bg-teal-50 px-8 py-16">
      <h3 className="font-nunito mt-[10px] flex items-center justify-center text-3xl font-[600]">
        Job Details
      </h3>
      <JobCreationForm />
    </div>
  );
};

export default Create;
