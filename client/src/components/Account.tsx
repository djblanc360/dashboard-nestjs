import { User } from '../types/user';

const Account = ({ user }: { user: User }) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }


    return (
        <div className='grid grid-rows-4 gap-4 my-4 lg:min-h-16 lg:min-w-[300px]'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <button 
            onClick={handleLogout}
                className='bg-secondary text-primary font-bold py-2 px-4 rounded border-2 hover:border-secondary hover:bg-primary hover:text-secondary'
            >
                Logout
            </button>
        </div>
    )
}

export default Account;