import React from 'react'

const Button = (props  ) => {
  return (
    <>
    <button className=' bg-red-500 text-white hover:text-gray-900 py-2 px-6 rounded md:ml-8 bg-gradient-to-r from-red-500 to-yellow-400 hover:from-green-300 hover:to-green-400 duration-500 '>
        {props.children}
         
    </button>

    </>
  )
}

export default Button