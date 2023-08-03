import React from 'react'
import loginSignupImage from "../assest/login-animation.gif";

function Signup() {
  return (
    <div className='p-3 md:p-4'>
        <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/* <h1 className='text-center text-2xl'>Sign up</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
            <img src={loginSignupImage} className='w-full'/>
        </div>
        <form >
            <label htmlFor="fristName">FristName</label>
        </form>

        </div>
    </div>
  )
}

export default Signup