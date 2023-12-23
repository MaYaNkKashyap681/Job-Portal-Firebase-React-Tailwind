import { RegisterFields } from "../components/RegisterForm";
import { getAuth, createUserWithEmailAndPassword, updateProfile, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebase.config";

export const registerUser = async (details: RegisterFields): Promise<User> => {
  const { name, email, password } = details;
  const auth = getAuth();

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;

    await updateProfile(user, {
      displayName: name
    });

    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      name,
      email,
      password,
      hasJobPosted: false
    });

    return user;
  } catch (err: any) {
    console.error('Registration error:', err.message);
    throw err;
  }
};
