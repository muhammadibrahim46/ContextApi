import React from 'react'
import khan from './ibrahim.jpg'

function Card() {
  return (
           <div className="bg-gray-900 p-4 rounded-lg shadow-lg w-80 mx-auto h-100  mt-10 text-center       transition-colors duration-500">
           <img className="w-10 h-10 rounded-full object-cover relative  mx-auto mt-10  " src={khan}         alt="Khan" />
          <h1 className="text-white dark:text-white font-bold text-sm mt-20 bg ">
          Apple Watch Series 7 GPS, Aluminum Case,
         <br />
         Starlight Sport 349-9382
       </h1>
    </div>
  )
}

export default Card
