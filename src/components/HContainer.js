import React from 'react'
import {useState} from 'react';
import "../Styles/HContainer.css"
const HContainer = () => {
    const [name,setName] = useState('');
  return (
    <main>
        <section className="box1">
             <div className="p-6 text-white">
                <h1 className="text-4xl font-bold">Hello, Alex!</h1>
                <p className="text-lg mt-2">
                    Welcome to your college hub. What's on your mind today?
                </p>
                <br></br>
                <div className="flex space-x-4">
                    <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
                    View My Profile
                    </button>
                    <button className="text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition">
                    Report Emergency
                    </button>
                </div>
            </div>
        </section>
        <br></br>
        <section className="bg-white py-6 rounded">
            <h1 className="text-xl font-bold">Important Announcements</h1>
            <p className='bg-blue-100 py-2 rounded' >Exam registration deadline extended to **November 15th**.</p><br></br>
            <p className='bg-blue-100 py-2 rounded'>Guest Lecture by Dr. Sharma on AI: **November 8th, 10 AM, Auditorium**.</p><br></br>
            <p className='bg-blue-100 py-2 rounded'>New student club applications are now **open until Nov 20th**.</p>
        </section>
    </main>
  )
}
export default HContainer;