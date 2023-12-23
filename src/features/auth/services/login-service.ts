import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginFields } from "../components/LoginForm"

export const loginUser = async (details: LoginFields) => {
    const { email, password } = details;
    console.log(email);
    const auth = getAuth();
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        if(userCredentials.user) {
            return "Sucessful";
        }
    }
    catch (err: any) {
        console.log("There is An error")
        throw (err);
    }
}