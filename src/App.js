
import React, { useState,useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { ThemeProvider, UserProvider  } from "./context/ThemeContext";
import LoginWithContext from "./login/LoginWithContext";
import LoginUseReducer from "./login/LoginUseReducer";
import LoginUseState from "./login/LoginUseReducerImmer";
import LoginUseReducerImmer from "./login/LoginUseReducerImmer"
import LoginUseReducerTypeScript from "./login/LoginUseReducerTypeScript"
import CarSale from "./reducerCar/CarSale"

function useLocationHash() {
  const [hash, setHash] = useState(window.location.hash);
  function onHashChange() {
    setHash(window.location.hash);
  }
  useEffect(() => {
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash;
}

function useSimpleHashRouter(routes) {
  const hash = useLocationHash();
  // Exclude '#' when calculating hash.
  const currentRoute = routes[hash.substr(1)];
  if (currentRoute) {
    return currentRoute;
  }
  return null;
}



function App() {
  
  const CurrentRoute = useSimpleHashRouter({
    useState: LoginUseState,
    useReducer: LoginUseReducer,
    useReducerImmer: LoginUseReducerImmer,
    withContext: LoginWithContext,
    useReducerTypeScript: LoginUseReducerTypeScript,
    carSale: CarSale,
    Dashboard: Dashboard
  });

  return (
    <div className="App App-Column">
        


    <UserProvider>
       <ThemeProvider>

       <a href='#'>HOME</a>
        {!CurrentRoute && (
        <div className=''>
          <a href='#carSale'>buy a car</a>
          <br />
          
          <a href='#useState'>useState</a>
          <br />

          <a href='#Dashboard'>Dashboard</a>
          <br />
          
          <a href='#useReducer'>useReducer</a>
          <br />
          
          <a href='#useReducerImmer'>useReducerImmer</a>
          <br />
      
          <a href='#withContext'>LoginWithContext</a>
        
          <br />
          <a href='#useReducerTypeScript'>LoginUseReducerTypeScript</a>
        </div>
      )}
      {CurrentRoute && <CurrentRoute />} 
        {/* <Dashboard /> */}

      
        </ThemeProvider>
        </UserProvider>
      </div>
  );
}

export default App;
