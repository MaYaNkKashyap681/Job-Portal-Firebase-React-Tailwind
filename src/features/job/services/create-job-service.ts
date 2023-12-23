import { db } from '../../../config/firebase.config';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Firestore,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';

type jobListing = {
  role: string;
  location: string;
  jobtype: string;
  aboutDesc: string;
  reqDesc: string;
  company: string;
};
export const createJob = async (details: jobListing) => {
  const { role, location, jobtype, aboutDesc, reqDesc, company } = details;

  try {
    const auth = getAuth();
    if (!auth.currentUser?.email) {
      toast('Login To Create');
      return false;
    }

    const userEmail = auth.currentUser?.email;
    const aboutArr = aboutDesc.split(',');
    const reqArr = reqDesc.split(',');

    const finalObj = {
      title: role,
      company: company,
      location,
      jobType: jobtype,
      description: aboutArr,
      requirements: reqArr,
      createdBy: userEmail,
      link: 'http://localhost:5173/jobs', // Replace with your actual link logic
    };

    console.log(finalObj);
    // Create a new job listing document in Firestore
    const newJobDoc = await addDoc(collection(db, 'jobListings'), finalObj);

    console.log('Job created successfully:', newJobDoc.id);
    return true;
  } catch (err) {
    console.error('Error creating job:', err);
    throw err;
  }
};
