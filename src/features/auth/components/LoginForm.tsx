import { ChangeEvent, useState } from 'react';
import InputField from '../../../shared/components/ui/InputField';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../shared/components/ui/Button';
import { loginUser } from '../services/login-service';
import Loading from '../../../shared/components/ui/Loading';
import {toast} from 'react-toastify'

export type LoginFields = {
    email: string;
    password: string;
};

const LoginForm = () => {

    const navigate = useNavigate()
    const [isPending, setIsPending] = useState<boolean>(false)
    const [formInput, setFormInput] = useState<LoginFields>({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormInput((prevFormInput) => ({
            ...prevFormInput,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            setIsPending(true)
            const res = await loginUser(formInput);
            if (res) {
                toast.success("Login Sucessful")
                navigate('/')
            }
        
        }
        catch (err) {
            toast.error("User Login Failed!")
        }
        finally {
            setIsPending(false);
            setFormInput({
                email: "",
                password: ""
            })
        }
    }


    return (
        <div className='w-[30rem]'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-3xl'>Login</h3>
                <p>
                    Don't have an account?{' '}
                    <span className='text-teal-400'>
                        <Link to={'/auth/register'}>Register &#8594;</Link>
                    </span>
                </p>
            </div>
            <div className='flex flex-col mt-[1rem] gap-4'>
                <InputField
                    label='Email'
                    name='email'
                    type='email'
                    value={formInput.email}
                    onChange={handleChange}
                    placeholder='Email'
                    error={false}
                />
                <InputField
                    label='Password'
                    name='password'
                    type='password'
                    value={formInput.password}
                    onChange={handleChange}
                    placeholder='Password'
                    error={false}
                />
            </div>
            <div className='mt-[2rem]'></div>
            <Button onClick={handleSubmit} fullWidth variant='teal'>
                {
                    isPending ? <>
                        <Loading />
                    </> : <>
                        <span className='text-white'>Submit</span>
                    </>
                }</Button>
        </div>
    );
};

export default LoginForm;
