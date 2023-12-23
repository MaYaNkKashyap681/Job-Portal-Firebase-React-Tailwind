import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import bell from '../assets/bell.svg';
import { useAuthStatus } from '../shared/hooks/useAuthStatus';
// import { toast } from "react-toastify";
// import { messaging } from "../config/firebase.config";
// import { getToken } from "firebase/messaging";

const Home = () => {
  const auth = getAuth();

  const {loggedIn} = useAuthStatus()

  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

  const handleNotificationOpen = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const onLogout = () => {
    auth.signOut();
    window.location.reload();
  };

  //Notification Based Code

  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();

  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey: 'BCXkYhKfy24GxEk-RNefvnA3R5FcCvt4TaA2hcSO9zEBrDTbiKw6bWw54KYPTXQy--HIQ1Hc7SC4Z3KcDWXci5Y'
  //     })
  //     console.log(token);
  //   }
  //   else if (permission === "denied") {
  //     toast.error("Notification Permission is Denied");
  //   }
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-teal-500">
      <div className="absolute top-0 flex justify-end">
        {loggedIn && (
          <div className="flex gap-4 pt-4">
            <div
              onClick={onLogout}
              className="flex cursor-pointer items-center justify-center p-1 font-bold text-white underline"
            >
              Logout
            </div>
            {/* <Button variant="teal">
              <span className="text-white">Profile</span>
            </Button> */}
            <div
              className="relative flex cursor-pointer items-center justify-center rounded-full bg-[#000000] p-2 hover:bg-opacity-80"
              onClick={handleNotificationOpen}
            >
              <img src={bell} alt="Bell Icon" className="" />
              {isNotificationOpen && (
                <div className="absolute right-[-500px] top-16 h-[400px] w-[500px] rounded-lg bg-white shadow-md"></div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">Your Next Career Awaits!</h1>
        <p className="mb-8 text-lg">
          Unlock exciting job opportunities and connect with top employers.
        </p>

        <Link to="/jobs">
          <button className="mr-4 rounded-full bg-white px-6 py-2 font-bold text-teal-500 transition duration-300 hover:bg-teal-400">
            Explore Jobs
          </button>
        </Link>
        {loggedIn ? (
          <>
            <Link to="/create">
              <button className="mr-4 rounded-full bg-white px-6 py-2 font-bold text-teal-500 transition duration-300 hover:bg-teal-400">
                Post Job
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth/login">
              <button className="mr-4 rounded-full bg-white px-6 py-2 font-bold text-teal-500 transition duration-300 hover:bg-teal-400">
                Login
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="rounded-full bg-white px-6 py-2 font-bold text-teal-500 transition duration-300 hover:bg-teal-400">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
