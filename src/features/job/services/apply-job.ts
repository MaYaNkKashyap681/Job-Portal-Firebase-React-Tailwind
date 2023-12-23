import { db } from "../../../config/firebase.config"
import {
    collection,
    addDoc,
    serverTimestamp,
} from 'firebase/firestore'


export type JobApplyIterface = {
    jobId: string,
    name: string,
    email: string
}

export const applyJob = async (deatils: JobApplyIterface) => {
    try {
        const {jobId, name, email} = deatils;

        if(!jobId || !name || !email) {
            throw new Error("Please Try Again!")
        }

        const finalObj = {
            applicantName: name,
            applicantEmail: email,
            jobId: jobId,
            timestamp: serverTimestamp()
        }
        const responsesRef = collection(db, 'responses');
        const response = await addDoc(responsesRef, finalObj);
        if(response) {
            return true;
        }
    }catch(err) {
        throw err;
    }
}