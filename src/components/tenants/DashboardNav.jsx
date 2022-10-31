import React from 'react'
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import { IoIosPeople } from 'react-icons/io'
import { MdPayment, MdMessage } from 'react-icons/md'
import { FaFileInvoiceDollar, FaDyalog } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'

const DashboardNav = () => {
    return (
        <>
            <div className='md:w-3/12 xl:w-2/12 bg-slate-100 h-screen hidden md:flex flex-col shadow px-9 py-5 gap-10 overflow-y-auto'>
                <h2>Navbar</h2>
                <ul className='flex flex-col gap-8 w-full'>
                    <li>
                        <Link to="/tenant/dashboard" className='flex items-center gap-3 w-full'>
                            <MdHome className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                            <HiMail className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Inbox</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                            <IoIosPeople className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Tenants</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tenant/payment" className='flex items-center gap-3'>
                            <MdPayment className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Payments</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                            <FaFileInvoiceDollar className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Invoice</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                            <FaDyalog className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Log</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                            <FaDyalog className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Complaints</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                            <MdMessage className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Letters</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                            <AiFillSetting className='text-gray-800' size="3vh" />
                            <p className='text-gray-800 font-semibold'>Settings</p>
                        </Link>
                    </li>
                </ul>
                {/* Dashboard */}
            </div>
            <div className='fixed md:hidden flex gap-5 bottom-0 left-0 bg-slate-100 shadow w-full px-5 py-3 z-40'>
                <Link to="/" className='flex flex-col items-center text-sm w-full text-gray-700 outline-none'>
                    <MdHome className='text-gray-800' size="5vh" />
                    <p className='font-medium'>Home</p>
                </Link>
                <Link to="/" className='flex flex-col items-center text-sm w-full text-gray-700 outline-none'>
                    <HiMail size="5vh" />
                    <p className='font-medium'>Inbox</p>
                </Link>
                <Link to="/" className='flex flex-col items-center text-sm w-full text-gray-700 outline-none'>
                    <IoIosPeople size="5vh" />
                    <p className='font-medium'>Tenants</p>
                </Link>
                <Link to="/" className='flex flex-col items-center text-sm w-full text-gray-700 outline-none'>
                    <AiFillSetting size="5vh" />
                    <p className='font-medium'>Settings</p>
                </Link>
            </div>
        </>
    )
}

export default DashboardNav