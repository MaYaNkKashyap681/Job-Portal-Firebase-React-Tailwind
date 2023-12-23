import { Link } from "react-router-dom"
import { getAuth } from "firebase/auth";
import { useState } from "react";
import Button from "../shared/components/ui/Button";
import bell from '../assets/bell.svg'
// import { toast } from "react-toastify";
// import { messaging } from "../config/firebase.config";
// import { getToken } from "firebase/messaging";

const Home = () => {

  const auth = getAuth();

  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);


  const handleNotificationOpen = () => {
    setIsNotificationOpen((prev) => !prev);
  }

  const [userData, setUserData] = useState<any>({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email
  })

  const onLogout = () => {
    auth.signOut()
    window.location.reload();
  }

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
    <div className="bg-teal-500 min-h-screen flex items-center justify-center relative">
      <div className="absolute top-0 flex justify-end">
        {
          userData.name && <div className="flex gap-4 pt-4">
            <div onClick={onLogout} className="text-white font-bold p-1 flex items-center justify-center underline cursor-pointer">
              Logout
            </div>
            {/* <Button variant="teal">
              <span className="text-white">Profile</span>
            </Button> */}
            <div className="flex items-center justify-center bg-[#000000] p-2 rounded-full hover:bg-opacity-80 cursor-pointer relative" onClick={handleNotificationOpen}>
              <img src={bell} alt="Bell Icon" className="" />
              {isNotificationOpen &&
                <div className="absolute top-16 right-[-500px] h-[400px] w-[500px] bg-white rounded-lg shadow-md">
                </div>
              }
            </div>
          </div>
        }
      </div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Your Next Career Awaits!</h1>
        <p className="text-lg mb-8">
          Unlock exciting job opportunities and connect with top employers.
        </p>

        <Link to="/jobs">
          <button className="bg-white text-teal-500 px-6 py-2 rounded-full font-bold hover:bg-teal-400 transition duration-300 mr-4">
            Explore Jobs
          </button>
        </Link>
        {
          userData.name ? <>

            <Link to="/create">
              <button className="bg-white text-teal-500 px-6 py-2 rounded-full font-bold hover:bg-teal-400 transition duration-300 mr-4">
                Post Job
              </button>
            </Link>
          </> : <>

            <Link to="/auth/login">
              <button className="bg-white text-teal-500 px-6 py-2 rounded-full font-bold hover:bg-teal-400 transition duration-300 mr-4">
                Login
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="bg-white text-teal-500 px-6 py-2 rounded-full font-bold hover:bg-teal-400 transition duration-300">
                Sign Up
              </button>
            </Link>
          </>
        }
      </div>
    </div>
  )
}

export default Home