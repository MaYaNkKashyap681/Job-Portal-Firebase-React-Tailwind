import { ChangeEvent, useState } from 'react';
import InputField from '../../../shared/components/ui/InputField';
import { Link } from 'react-router-dom';
import Button from '../../../shared/components/ui/Button';
import { registerUser } from '../services/register-service';
import Loading from '../../../shared/components/ui/Loading';
import { toast } from 'react-toastify';

export type RegisterFields = {
    name: string;
    email: string;
    password: string;
};

const RegisterForm = () => {

    const [isPending, setIsPending] = useState<boolean>(false)
    const [formInput, setFormInput] = useState<RegisterFields>({
        name: '',
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
            const res = await registerUser(formInput);
            if (res) {
                toast.success("User Created Sucessfully");
            }
        }
        catch (err) {
            toast.error("User Registration Failed!")
        }
        finally {
            setIsPending(false);
            setFormInput({
                name: "",
                email: "",
                password: ""
            })
        }
    }

    return (
        <div className='w-[30rem]'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-3xl'>Register</h3>
                <p>
                    Already have an account?{' '}
                    <span className='text-teal-400'>
                        <Link to={'/auth/login'}>Login &#8594;</Link>
                    </span>
                </p>
            </div>
            <div className='flex flex-col mt-[1rem] gap-4'>
                <InputField
                    label='Name'
                    name='name'
                    type='text'
                    value={formInput.name}
                    onChange={handleChange}
                    placeholder='Username'
                    error={false}
                />
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

export default RegisterForm;
