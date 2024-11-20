import {NavLink} from 'react-router-dom'
import { useState, createContext } from 'react';



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

