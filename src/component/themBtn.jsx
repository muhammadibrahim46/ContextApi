import { useContext } from "react";
import { ToggleContext } from "./contexts/theme";

function ThemeBtn() {
  const { isToggled, toggleTheme } = useContext(ToggleContext);

  return (
    <div className="flex justify-center mt-30">
      <button 
        onClick={toggleTheme}
        className={` bg-amber-400 w-28 mt-20
          px-6 py-2 rounded-full  
          ${isToggled 
            ? "bg-blue-500 text-white hover:bg-blue-600" 
            : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
      >
        {isToggled ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeBtn;

