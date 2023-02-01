import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/profile.png';
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../helper/validate'
import { useAuthStore } from '../../store/store'
import { auth, signInWithEmailAndPassword, signInWithGoogle, signInWithPopup } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from './Login.module.css';
import { async } from '@firebase/util';

function Login() {

    const navigate = useNavigate();
    const setUsername = useAuthStore(state => state.setUsername);
    const [user, loading, error] = useAuthState(auth);
    const formik = useFormik({
        initialValues: {
            username: 'example123'
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            setUsername(values.username);
            navigate('/password')
        }
    });
    const onLogin = async (e) => {
        e.preventDefault();
        await signInWithGoogle();
        if (loading) {
            toast.loading("Login Google Account")
            return;
        }
        if (user) {
            toast.success('Success Notification !');
            navigate("/");
        }
    }
    useEffect(() => {
        if (loading) {
            toast.loading("Login Google Account")
            return;
        }
        if (user) navigate("/");
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
                            {/* <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' /> */}
                            {/* <button className={styles.btn} type='submit'>Sign In</button> */}
                            <button className={styles.btn} onClick={onLogin}>Sign In with Google</button>
                        </div>
                        {/* 
                        <div className="text-center py-4">
                            <span className='text-gray-500'>Not a Member <Link className={styles.stn} to="/register">Register Now</Link></span>
                        </div> */}

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login