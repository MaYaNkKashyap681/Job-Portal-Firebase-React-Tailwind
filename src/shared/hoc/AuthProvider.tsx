export const AuthProvider = () => {
  return (
    <div>AuthProvider</div>
  )
}


// import React, { useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged, Auth, User } from 'firebase/auth';
// import { signInWithUid } from '../utils/sign-in-service';
// import { toast } from 'react-toastify';

// interface AuthProviderProps {
//   children: React.ReactNode;
// }

// const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const auth: Auth = getAuth();
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
       
//         setUser(user);
//         localStorage.setItem('userId', user.uid);
//         toast.success('User Logged In!');
//       } else {

//         setUser(null);
//         localStorage.removeItem('userId');
//       }
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   async function handleLogin() {
//     try {
//       const userId = localStorage.getItem('userId');
//       if (userId && !user) {
//         const userLoggedIn = await signInWithUid(userId);
//         if (userLoggedIn) {
          
//         }
//       }
//     } catch (error) {
//       console.error('Error handling login:', error);
//     }
//   }

//   useEffect(() => {
//     handleLogin();
//   }, [auth, user]);

//   return <>{children}</>; // Render the wrapped components
// };

// export default AuthProvider;
