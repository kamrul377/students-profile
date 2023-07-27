import React, { useState } from 'react'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    
    // console.log(open)
    return (
        <div>

            <nav className="bg-purple-500 border-gray-200 dark:bg-gray-900 shadow">

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <a href="">
                        <img src="./eshop.png" alt="" className='h-full w-[100px]' />
                    </a>

                    <button className='md:hidden' onClick={() => setOpen(!open)}>
                        {open ? <IoCloseOutline color='white' size={30} /> : <HiMiniBars3BottomRight color='white' size={30} />}
                    </button>

                    <div className={`${open ? null : 'hidden'} w-full md:block md:w-auto absolute top-11 left-0 md:static transition-opacity`} id="navbarDefault">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-500 transition-colors md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Student</a>
                            </li>
                            <li>
                                <a href="/add-student" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Add</a>
                            </li>
                            {/* <li>
                                <a href="/pricing" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li> */}
                            <li>
                                <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                         
                        </ul>
                    </div>


                </div>
            </nav>

        </div>
    )
}

export default Navbar