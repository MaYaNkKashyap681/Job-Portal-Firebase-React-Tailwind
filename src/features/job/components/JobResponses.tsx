import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../config/firebase.config';

const JobResponses: React.FC<{
  jobid: string;
}> = ({ jobid }) => {
  const [jobResponses, setJobResponses] = useState<any[]>([]);

  const fetchJobResponses = async () => {
    try {
      const reponseRef = collection(db, 'responses');
      const q = query(reponseRef, where('jobId', '==', jobid));

      const resSnap = await getDocs(q);

      const jobResponses: any[] = [];

      resSnap.forEach((doc) => {
        jobResponses.push(doc.data());
      });
      console.log(jobResponses);
      setJobResponses(jobResponses);
    } catch (err) {}
  };

  useEffect(() => {
    fetchJobResponses();
  }, [jobid]);

  return (
    <div className="mt-[3rem] p-8">
      <h3 className="text-3xl font-semibold">People Responded</h3>

      <div className="mt-[1rem] rounded-xl bg-white p-4">
        {jobResponses.map((item: any, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-md bg-teal-600 p-2 text-white"
          >
            <h2>{item.applicantEmail}</h2>
            <h4>{item.applicantName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobResponses;
