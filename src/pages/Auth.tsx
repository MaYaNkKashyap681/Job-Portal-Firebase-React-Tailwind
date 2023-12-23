import { Outlet } from 'react-router-dom'
import pattern from '../assets/pattern.jpg'

const Auth = () => {
    return (
        <div className='flex h-screen w-screen z-[10]'>
            <div className='w-[40%] bg-black text-white p-12 relative'>
                <h3 className='text-3xl font-bold'>Hiring<span className=' text-teal-400'>Companion</span></h3>
                <p className='text-xl mt-[1rem]'>
                    Unlock exciting job possibilities by logging into our advanced hiring portal.
                </p>

                <div className='absolute bottom-0 h-[20rem] z-[20]'>
                    <img src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhdmVzfGVufDB8fDB8fHww" className='w-full h-full object-cover' />
                </div>

                <div className='w-[20rem] h-[20rem] absolute bottom-16 right-16 z-[15]'>
                    <img src={pattern} alt="pattern" className='w-full h-full object-cover' />
                </div>

                <h1 className='absolute bottom-7 right-3'>
                    HiringCompanion@2023

                </h1>
            </div>
            <div className='flex items-center justify-center w-[60%]'>
                <Outlet />
            </div>
        </div>
    )
}

export default Auth