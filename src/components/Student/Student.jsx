import React, { useEffect, useState } from 'react'
import Singlestudent from './Singlestudent'


const Student = () => {

  const [allStudents, setAllStudents] = useState(null)


  // console.log(allStudents)

  useEffect(() => {
    const students = localStorage.getItem('students')
    let s = JSON.parse(students)
    setAllStudents(s)


  }, [])


  // console.log(allStudents[0].name)
  return (
    <>

      <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div>
          <h1 className='text-white text-3xl font-bold text-center'>All Students</h1>
          <hr />
        </div>
        <div className='bg-gradient-to-b from-blue-500 tocy w-full min-h-screen'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] mx-auto gap-2'>
            {

              allStudents && allStudents.reverse().map((students, i) => {
                // console.log(students)
                return <Singlestudent {...students} key={i} />
              })
            }


          </div>
        </div>
      </div>
    </>
  )
}

export default Student