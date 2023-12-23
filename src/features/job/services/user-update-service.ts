import { db } from '../../../config/firebase.config';
import { updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const userUpdatedJob = async () => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.error('User not logged in');
      return false;
    }

    const userId = currentUser.uid;

    const userDocRef = doc(db, 'users', userId);

    await updateDoc(userDocRef, {
      hasJobPosted: true,
      updatedAt: serverTimestamp(),
    });

    console.log('User document updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating user document:', error);
    throw error;
  }
};
