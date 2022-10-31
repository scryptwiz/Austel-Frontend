import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div className="w-full h-full min-h-screen max-h-screen bg-green-900/80 flex items-center justify-center">
        <div className="bg-white w-80 lg:w-96 px-10 pb-10 relative flex flex-col gap-5">
            <div className="flex font-medium text-base mx-auto w-fit">
                <button className="px-5 py-1.5 shadow text-green-600">Agent</button>
            </div>
            <h2 className="text-green-600 text-2xl w-32 font-semibold mt-3">Login</h2>
            <div className='flex flex-col gap-5 mt-2'>
                <input type="text" className="w-full outline-none border-b border-green-500 font-base px-1 py-1.5 text-gray-700 focus:border-green-600 overflow-auto"  placeholder="Email Address"/>
                <input type="password" className="w-full outline-none border-b border-green-500 font-base px-1 py-1.5 text-gray-700 focus:border-green-600 overflow-auto"  placeholder="Password"/>
                <FormControlLabel control={<Checkbox size='small' color='success' defaultChecked />} label="Remember Me" />
                <button className='text-white bg-green-700 font-semibold rounded px-20 text-lg tracking-wider py-1.5 mt-2 w-fit mx-auto'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login