import { Outlet } from 'react-router-dom';
import pattern from '../assets/pattern.jpg';

const Auth = () => {
  return (
    <div className="z-[10] flex h-screen w-screen">
      <div className="relative w-[40%] bg-black p-12 text-white">
        <h3 className="text-3xl font-bold">
          Hiring<span className=" text-teal-400">Companion</span>
        </h3>
        <p className="mt-[1rem] text-xl">
          Unlock exciting job possibilities by logging into our advanced hiring
          portal.
        </p>

        <div className="absolute bottom-0 z-[20] h-[20rem]">
          <img
            src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhdmVzfGVufDB8fDB8fHww"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-16 right-16 z-[15] h-[20rem] w-[20rem]">
          <img
            src={pattern}
            alt="pattern"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="absolute bottom-7 right-3">HiringCompanion@2023</h1>
      </div>
      <div className="flex w-[60%] items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
