import { useLocation, useParams } from 'react-router-dom';
import ApplyForm from '../features/job/components/ApplyForm';

const Apply = () => {
  const location = useLocation();
  const { company, title } = location.state;

  // Extracting the "id" parameter from the URL
  const { id } = useParams();

  return (
    <div className="h-screen bg-teal-400">
      <div className="p-8">
        <h3 className="text-[6rem] font-bold text-white">Job Listings.</h3>
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="text-xl font-light text-white">{company}</h3>
      </div>
      <div className="p-8">
        <ApplyForm />
      </div>
      {/* Add your form or application content here */}
    </div>
  );
};

export default Apply;
