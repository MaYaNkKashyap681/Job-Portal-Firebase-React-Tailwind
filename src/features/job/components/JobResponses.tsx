import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../../config/firebase.config";

const JobResponses: React.FC<{
    jobid: string
}> = ({ jobid }) => {

    const [jobResponses, setJobResponses] = useState<any[]>([]);


    const fetchJobResponses = async () => {
        try {
            const reponseRef = collection(db, 'responses');
            const q = query(reponseRef, where("jobId", "==", jobid));

            const resSnap = await getDocs(q);

            const jobResponses: any[] = [];

            resSnap.forEach((doc) => {
                jobResponses.push(doc.data());
            });
            console.log(jobResponses);
            setJobResponses(jobResponses);
        }
        catch (err) {

        }
    }

    useEffect(() => {
        fetchJobResponses();
    }, [jobid])

    return (
        <div className='mt-[3rem] p-8'>
            <h3 className='font-semibold text-3xl'>People Responded</h3>

            <div className="bg-white rounded-xl p-4 mt-[1rem]">
                {
                    jobResponses.map((item: any, index) => (
                        <div key={index} className="flex gap-4 bg-teal-600 text-white p-2 rounded-md">
                            <h2>{item.applicantEmail}</h2>
                            <h4>{item.applicantName}</h4>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default JobResponses