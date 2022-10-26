import React from 'react'

const Button = (props  ) => {
  return (
    <>
    <button className=' bg-red-500 text-white py-2 px-6 rounded md:ml-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 duration-500 '>
        {props.children}
         
    </button>

    </>
  )
}

export default Button