import Login from '@components/Login';
import Account from '@components/Account';

import { useAppSelector } from '@store/hooks';
import { currentUser } from '@store/authSlice';

const LoginPage = () => {
    const user = useAppSelector(currentUser);
    console.log('user', user);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="p-8">
                <h1>Welcome back</h1>
                {user ? <Account user={user} /> : <Login /> }
            </div>
        </div>
    );
};

export default LoginPage;