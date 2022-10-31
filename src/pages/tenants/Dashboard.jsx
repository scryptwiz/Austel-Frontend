import React from 'react';
import {FiEdit2} from 'react-icons/fi'
import DashboardNav from '../../components/tenants/DashboardNav';

const Dashboard = () => {
  return (
    <div className='w-full h-full min-h-screen bg-white flex'>
      <DashboardNav />
      <div className='md:w-10/12 w-full min-h-screen max-h-screen flex flex-col relative overflow-y-auto'>
        <div className='bg-white w-full px-12 py-5 border-b-2 justify-end flex'>
            <div className='rounded-full bg-green-400 w-12 h-12 flex items-center'></div>
        </div>
        <div className="w-full px-5 mt-10">
          <div className='flex h-fit flex-wrap'>
            {/* Wraped div */}
            <div className='flex flex-col md:w-1/2 w-full md:pr-5 gap-5 h-96'>
              <div className='border border-green-500 h-1/2 flex px-3 py-5'>
                <div className='w-12 h-12 rounded-full bg-gray-700'></div>
                <div className='ml-3 w-8/12'>
                  <small className='text-gray-500 text-xs'>Welcome</small>
                  <h1 className='font-semibold text-xl text-green-700'>Chisom Joshua</h1>
                  <p className='text-xs mt-2'>Adedeji Hostel, No 2, Folashade close, UnderG, Ogbomoso.</p>
                  <button className='text-white bg-green-700 px-5 py-1.5 text-sm mt-3 flex gap-1 items-center'><FiEdit2/> Edit Profile</button>
                </div>
              </div>
              <div className='border border-green-500 h-1/2'></div>
            </div>
            <div className='h-96 md:w-1/2 w-full border mt-5 md:mt-0 border-green-500'></div>
          </div>
          <div className='w-full bg-green-700 rounded h-32 mt-10 mb-20'></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard