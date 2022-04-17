import React from 'react';
import googleIcon from '../../../images/google-icon.png';
import facebookIcon from '../../../images/facebook-icon.png';
import githubIcon from '../../../images/github-icon.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement=
          <div>
            <p>Error: {error?.message} {error1?.message}</p>
          </div>
      }

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleIcon} alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button>
                {errorElement}
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebookIcon} alt="" />
                    <span className='px-2'>Facebook Sign in</span>
                </button>

                <button onClick={()=>signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={githubIcon} alt="" />
                    <span className='px-2'>Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;