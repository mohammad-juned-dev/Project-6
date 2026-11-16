import { createContext , useEffect, useState} from "react";
import { VITE_CURRENCY } from "../../data";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

 export const AppContextProvider = (props) => {
const currency = VITE_CURRENCY
const [allCourses, setAllCourses] = useState([])

const fetchCourses = async()=>{
  setAllCourses(dummyCourses)
}

useEffect(()=>{
fetchCourses()
},[])

  const value = {
    currency,allCourses
  };
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  );
};
