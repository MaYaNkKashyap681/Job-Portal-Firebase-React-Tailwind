// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../config/firebase.config';

// export const signInWithUid = async (userId: string): Promise<boolean> => {
//   try {
//     const auth = getAuth();
//     const userRef = collection(db, 'users');
//     const q = query(userRef, where('email', '==', userId));
//     const snap = await getDocs(q);

//     const userData = snap.docs.map((doc) => doc.data());

//     if (userData.length === 0) {
//       throw new Error('User not found');
//     }

//     const { email, password } = userData[0];

//     console.log('User Data:', userData);

//     const userLogin = await signInWithEmailAndPassword(auth, email, password);

//     if (userLogin.user) {
//       localStorage.setItem('userId', userLogin.user.uid);
//       return true;
//     }

//     return false;
//   } catch (err) {
//     console.error('Error signing in with UID:', err);
//     throw err;
//   }
// };
