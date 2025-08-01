import React, { useState } from 'react'


const Login = () => {
    const [cureentState, setcureentState] = useState('Sign up')
    const onSumbitHendler = async(event)=>{
   event.preventDefault();
    }
    return (
        <form onSubmit={onSumbitHendler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl '>{cureentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {cureentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray--800 rounded-[20px]' placeholder='NAME' required />}
            <input type="EMAIL" className='w-full px-3 py-2 border border-gray--800 rounded-[20px]' placeholder='EMAIL' required />
            <input type="PASSWORD" className='w-full px-3 py-2 border border-gray--800 rounded-[20px]' placeholder='PASSWORD' required />
            <div className='w-full flex justify-between text-sm mt-[8px]'>
                <p className='cursor-pointer font-medium'>Forgot your password</p>
                {
                    cureentState === 'Login'
                        ? <p onClick={() => setcureentState('Sign Up')} className='cursor-pointer font-medium text-base'>Create account</p>
                        : <p onClick={() => setcureentState('Login')} className='cursor-pointer font-medium text-base'>Login here</p>
                }
            </div>
            <button className='bg-black  text-white text-[18px] font-light px-8 rounded-[20px] hover:bg-gray-700 transition hover:scale-110 w-full py-2 mt-4'>{cureentState === 'Login' ? 'Sign in' : 'Sign up'}</button>

        </form>
    )
}

export default Login
