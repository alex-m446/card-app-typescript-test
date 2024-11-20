import React, { useState, useEffect, createContext } from "react";
import NavBar from './components/NavBar'
import AllEntries from './routes/AllEntries'
import NewEntry from './routes/NewEntry'
import EditEntry from './routes/EditEntry'
import { EntryProvider } from './utilities/globalContext'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
    document.body.style.backgroundColor = 'grey';
    if(isDarkMode) {
      document.body.style.backgroundColor = '';
    };
  };


  return (
    <section>
  <Router>
    <EntryProvider>
    <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}></NavBar>
      <Routes>
        <Route path="/" element={<AllEntries isDarkMode={isDarkMode}/>}>
        </Route>
        <Route path="create" element={<NewEntry isDarkMode={isDarkMode}/>}>
        </Route>
        <Route path="edit/:id" element={<EditEntry isDarkMode={isDarkMode}/>}>
        </Route>
      </Routes>
    </EntryProvider>
    </Router>
    </section>
    
  );
}
