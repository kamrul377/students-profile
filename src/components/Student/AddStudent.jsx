import React, { useState, useEffect } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import toast, { Toaster } from 'react-hot-toast';

const AddStudent = () => {


  const [isAlert, setIsAlert] = useState(false)
  const [errorMsg, setErrorMsg] = useState('Something is wrong')

  const getLocalItems = () => {
    let localStudent = localStorage.getItem('students')
    // console.log(localStudent)
    if (localStudent === null || localStudent.length < 1) {
      return []
    } else {
      return JSON.parse(localStudent)
    }
  }

  const [allStudents, setAllStudents] = useState(getLocalItems())
  const [isDragOver, setIsDragOver] = useState(false);
  const [loading,setLoading] = useState(true)

  // console.log(isDragOver)

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    // event.preventDefault();
    // setIsDragOver(false);
    // const files = event.dataTransfer.files;
    // // setImage(URL.createObjectURL(files[0]))
    // console.log(files)
    // // handleImage(files)
  };


  const [image, setImage] = useState(null);
  // console.log(image)
  const [student, setStudent] = useState({
    name: "",
    roll: '',
    department: '',
    section: '',
    email: '',
    hometown: '',
  })


  const handleImage = (e) => {

    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)


    // reader.readAsDataURL(e.target.files[0])

    // console.log(reader.readAsDataURL(e.target.files[0]))



    // const file = e.target.files[0];
    // const imgUrl = URL.createObjectURL(file)
    // // console.log(imgUrl)
    // setImage(imgUrl)
    // // console.log(imgUrl)
  }

  // handle all fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => {
      return {
        ...prevStudent, [name]: value
      }
    })
  }

  // submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // if(student.name == null || student.roll == null || student.department == null || student.section == null || student.email == null || student.hometown){ 
    //   setIsAlert(true)
    //   setErrorMsg("All fields are required..")
    // }


    const newStudent = {
      ...student,
      image
    }

    console.log(newStudent)

    setAllStudents((prev) => {
      return [...prev, newStudent]
    })


    

    toast.success('student added successfully')




    setTimeout(()=> { 
      window.location.reload(true)
    },200)

  }

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(allStudents))

    console.log('student added')
  }, [handleSubmit])


  return (


    <>

      <div className='w-[90%] md:w-[80%] mx-auto border-[1px] p-4 my-3 bg-white dark:bg-[#111827]'>
        <h1 className='text-3xl font-bold text-gray-500 text-center'>  ADD NEW STUDENT </h1>
        <hr className='my-4' />
        {/* alert */}
        <div id="alert" className={`${isAlert ? "flex" : 'hidden'} items-center justify-between p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`} role="alert">
          <div className="ml-3 text-sm font-medium">
            <p>{errorMsg}</p>
          </div>
          <CgClose size={25} className='cursor-pointer' onClick={() => setIsAlert(false)} />
        </div>

        <Toaster
          position="top-right"
          reverseOrder={true}
        />

        <form action="" className='mt-8' onSubmit={handleSubmit}>

          <div className="grid sm:grid-cols-2 gap-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
              <input type="text" name='name' id="first_name" value={student.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Kamrul islam" required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="roll" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roll</label>

              <input type="number" name='roll' id="roll" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="486069" required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
              <select id="department" name='department' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}

              >
                <option selected disabled>Choose a department</option>
                <option value="Computer">Computer</option>
                <option value="Civil">Civil</option>
                <option value="Electrical">Electrical</option>
                <option value="Electronic">Electronic</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Power">Power</option>
                <option value="Environment">Environment</option>
              </select>

            </div>
            <div className='section'>
              <label htmlFor="section" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Section</label>
              <select id="section" name='section' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}

              >
                <option selected disabled>Choose section</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select>

            </div>

            <div className="email">
              <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="email" name='email' id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="example@gmail.com" required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='hometown'>
              <label htmlFor="hometown" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">hometown</label>
              <select id="section" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='hometown' onChange={handleChange} required>
                <option selected disabled>Choose hometown</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Sylhet">Sylhet</option>
              </select>

            </div>

            {/* file upload */}

            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-cover bg-no-repeat bg-center z-50"
                onChange={handleImage}
                style={{ backgroundImage: `url(${image})` }}
                // onDrag={handleDrag}
                onDrop={handleDrop}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}

              >
                {image ? null : <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 z-[-400px]"><span className="font-semibold">Click to upload</span></p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 z-[-400px]">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>}
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <br />

            <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-sm text-sm px-5 py-1 text-center mr-2 mb-2 h-7">Create Student </button>


          </div>


        </form>



      </div>

    </>
  )
}

export default AddStudent

