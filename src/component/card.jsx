import React, { useContext } from 'react';
import { ToggleContext } from "./contexts/theme";
import pics from './ibrahim.jpg';

function Card() {
  const { isToggled } = useContext(ToggleContext); 

  return (
    <div className="flex justify-center items-center  ">
      {/* Card */}
      <div 
        className={`w-80 h-80 rounded-4xl border-2 p-6 shadow-orange-400 mt-40 
          ${isToggled ? "bg-gray-900 text-white border-gray-600" : "bg-yellow-950 text-white border-gray-300"}`}
      >
        {/* Image */}
        <div className=" justify-center">
          <img 
            className="w-32 h-32 rounded-[10000px]"
            src={pics} 
            alt="Nature"
          />
        </div>

        {/* Text */}
        <p className="text-center mt-4">
          Theme toggle button for dark and light mode
        </p>
      </div>
    </div>
  );
}

export default Card;
