import React from 'react'
import logo2 from '../../Assets/sheri.png'
import logo1 from '../../Assets/hamza.png'
import logo3 from '../../Assets/moiz.png'
const HeroSection = () => {
    return (
        <>
            <div className='grid grid-cols-3 justify-items-center  mb-4'>

                <div className='bg-gradient-to-r from-red-500 via-red-400 to-yellow-100 h-[600px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg lg:mt-[150px]'>
                    <div className=' h-72 w-72 rounded-full mt-4 grid justify-items-center '>
                        <img src={logo1} className='h-96 w-64 rounded-full object-cover border-2 border-white' />
                        <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
                        <strong className=' text-xl font-[poppins]'>Muhammad Hamza Sattar</strong>

                    </div>
                </div>
                <div className='bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 h-[600px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg lg:mt-[70px]'>
                    <div className=' h-fit w-72 rounded-full     mt-4 grid justify-items-center '>
                        <img src={logo2} className='h-96 w-64 rounded-full border-2 border-white' />
                        <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
                        <strong className=' text-xl font-[poppins]'>Shehriyar</strong>
                    </div>


                </div>
                <div className='bg-gradient-to-r from-yellow-300   via-red-400 to-red-500 h-[600px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg lg:mt-[10px]'>
                    <div className=' h-80 w-80 rounded-full mt-4 grid justify-items-center '>
                        <img src={logo3} className='h-96 w-72 rounded-full border-2 border-white  '  />
                        <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
                        <strong className=' text-xl font-[poppins]'>Moiz Khan</strong>

                    </div>


                </div>


            </div >

        </>
    )
}
export default HeroSection;
