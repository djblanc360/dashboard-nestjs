import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {useMutation } from '@tanstack/react-query';
import { login } from '@services/loginService';

import { useAppDispatch } from '@store/hooks'; 
import { loggingIn } from '@store/authSlice';
import { User } from '../types/user';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data: { token: string; account: User }) => {
            console.log('redirecting to invoices');
            dispatch(loggingIn({ token: data.token, user: data.account }));
            navigate('/invoices');
        },
        onError: (error) => {
            setError('Invalid credentials');
            console.error('Invalid credentials', error);
        },
    });

    const handleLogin = async () => {
        setError('');

        const data = {
            email: email,
            password: password,
        };
        mutation.mutate(data);
    };

    return (
        <div className='grid grid-rows-4 gap-4 my-4 lg:min-h-16 lg:min-w-[300px]'>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-primary bg-secondary border border-primary p-2 rounded focus:outline-none focus:border-primary"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-primary bg-secondary border border-primary p-2 rounded focus:outline-none focus:border-primary"
            />
            <button 
                onClick={handleLogin}
                className='bg-secondary text-primary font-bold py-2 px-4 rounded border-2 hover:border-secondary hover:bg-primary hover:text-secondary'
            >
                Login
            </button>
            {error && <p className='text-red-400'>{error}</p>}
        </div>
    )
}

export default Login