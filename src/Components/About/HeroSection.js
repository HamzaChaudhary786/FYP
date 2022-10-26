import React from 'react'
import logo1 from '../../Assets/charity.png'
const HeroSection = () => {
    return (
        <>
            <div className='grid grid-cols-3 justify-items-center items-center p-10  '>
                <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[600px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg'>
                    <div className=' h-72 w-72 rounded-full bg-slate-300 mt-4 grid justify-items-center'>
                        <img src={logo1} />
                        <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
                    </div>


                </div>
                <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[600px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg'>
                    <div className=' h-72 w-72 rounded-full bg-slate-300 mt-4 grid justify-items-center'>
                        <img src={logo1} />
                        <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
                    </div>


                </div>
                <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[600px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg'>
                    <div className=' h-72 w-72 rounded-full bg-slate-300 mt-4 grid justify-items-center'>
                        <img src={logo1} />
                        <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
                    </div>


                </div>
            </div>

        </>
    )
}
export default HeroSection;
