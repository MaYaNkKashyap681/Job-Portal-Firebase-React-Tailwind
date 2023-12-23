import { useAuthStatus } from "../shared/hooks/useAuthStatus";
import { useNavigate } from "react-router-dom";
import JobCreationForm from "../features/job/components/JobCreationForm";

const Create = () => {

  const { loggedIn } = useAuthStatus();
  const navigate = useNavigate();
  if (!loggedIn) {
    navigate('/');
  }

  return (
    <div className="bg-secondary1 rounded-xl py-16 px-8 items-start overflow-x-hidden bg-teal-50">
      <h3 className="font-[600] font-nunito text-3xl mt-[10px] flex items-center justify-center">
        Job Details
      </h3>
      <JobCreationForm />
    </div>
  );
}

export default Create