import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputField from '../../../shared/components/ui/InputField';
import Button from '../../../shared/components/ui/Button';
import Loading from '../../../shared/components/ui/Loading';
import { applyJob } from '../services/apply-job';

const ApplyForm = () => {
  // const navigate = useNavigate();
  const [isJobApplied, setIsJobApplied] = useState<boolean>(false);
  const params = useParams();

  const jobId = params['jobid'] || '';

  const [isPending, setIsPending] = useState<boolean>(false);
  const [formInput, setFormInput] = useState<{
    name: string;
    email: string;
  }>({
    email: '',
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInput((prevFormInput: any) => ({
      ...prevFormInput,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await applyJob({
        jobId: jobId,
        email: formInput.email,
        name: formInput.name,
      });

      if (res) {
        setIsJobApplied(true);
        toast.success('Job Applied Sucessfully');
      }
    } catch (err) {
      toast.error('User Login Failed!');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-white">Apply For The Job Here:</h2>

      {isJobApplied ? (
        <div className='mt-[2rem]'>
          <Button>Job has been applied</Button>
        </div>
      ) : (
        <>
          <div className="mt-[1rem] flex flex-col gap-4">
            <InputField
              label="APPLICANT EMAIL"
              name="email"
              type="email"
              value={formInput.email}
              onChange={handleChange}
              placeholder="Email"
              error={false}
            />
            <InputField
              label="APPLICANT NAME"
              name="name"
              type="text"
              value={formInput.name}
              onChange={handleChange}
              placeholder="Mayank Kashyap"
              error={false}
            />
          </div>
          <div className="mt-[2rem]"></div>
          <Button onClick={handleSubmit} fullWidth variant="primary">
            {isPending ? (
              <>
                <Loading />
              </>
            ) : (
              <>
                <span className="text-white">Submit</span>
              </>
            )}
          </Button>
        </>
      )}
    </div>
  );
};

export default ApplyForm;
