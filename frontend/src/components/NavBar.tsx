import {NavLink} from 'react-router-dom'
import { useState, createContext } from 'react';


//const [isDarkMode, setDarkMode] = useState(false);
//const bgClass = isDarkMode ? 'bg-theme-bgDark hover:bg-theme-bgDarkHover' : 'bg-theme-bg hover:bg-theme-bgHover';

/*
interface DarkModeProps {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}


const toggleDarkMode = ({ isDarkMode, setDarkMode }: DarkModeProps): void => {
  setDarkMode(!isDarkMode);
  document.body.style.backgroundColor = 'grey';
  if(isDarkMode) {
    document.body.style.backgroundColor = '';
  };
};
  */

export default function NavBar(props : {isDarkMode: boolean; toggleDarkMode: any}){
  const buttonClass = props.isDarkMode ? 'bg-theme-buttonDark hover:bg-theme-buttonDarkHover' : 'bg-theme-button hover:bg-theme-buttonHover';

    return(
      <nav className="flex justify-center gap-5">
        <NavLink className={`${buttonClass} m-3 p-4 text-xl  rounded-md font-medium text-white`} to={'/'}>All Entries</NavLink>
        <NavLink className={`${buttonClass} m-3 p-4 text-xl  rounded-md font-medium text-white`} to={'/create'}>New Entry</NavLink>
        <button className={`${buttonClass} m-3 p-4 text-xl  rounded-md font-medium text-white`} onClick={props.toggleDarkMode}>Dark Mode</button>
      </nav>
    )
}

