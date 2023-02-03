import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/profile.png';
import { Toaster, toast, useToaster } from 'react-hot-toast';
import { useAuthStore } from '../../store/store'
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from './Login.module.css';

function Login() {

    const navigate = useNavigate();
    const setUsername = useAuthStore(state => state.setUsername);
    const [user, loading, error] = useAuthState(auth);
    const onLogin = async (e) => {
        e.preventDefault();
        await signInWithGoogle();
        if (loading) {
            return;
        }
        if (user) {
            navigate("/");
        }
    }
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/");
        }
    }, [user, loading]);

    return (
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>

                    <div className="title flex flex-col items-center">
                        <h4 className='gradient__text text-5xl font-bold'>Hello Again!</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                            Explore More by connecting with us.
                        </span>
                    </div>

                    <form className='py-1'>
                        <div className='profile flex justify-center py-4'>
                            <img src={avatar} className={styles.profile_img} alt="avatar" />
                        </div>


                        <div className="textbox flex flex-col items-center gap-6">

                            <button className={styles.btn} onClick={onLogin}>Sign In with Google</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login