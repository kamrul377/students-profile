import axios from 'axios'
import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti'

const Singlestudent = ({ name, roll, department, section, email, hometown, image }) => {


    return (
        <div className="card w-full bg-[#0d3b52]  my-4 flex justify-center items-center flex-col border-2 border-[#fcff63] gap-2  shadow rounded">

            <div className="profile h-36 w-36  rounded-full overflow-hidden flex justify-center items-center border-2 border-indigo-400 dark:border-cyan-300 bg-transparent m-3">


                <img src={image || 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'} alt='' className='rounded-full h-32 w-32 bg-cover' />
            </div>

            <div className="content-center text-sm bg-[#052630] text-slate-400 font-bold p-3 w-full rounded-sm">
                <p>Name: {name}</p>
                <p>Roll: {roll}</p>
                <p>Department: {department}</p>
                <p>Section: {section}</p>
                <p>Email: {email} </p>
                <p>Hometown: {hometown} </p>
            </div>
        </div>




    )
}

export default Singlestudent