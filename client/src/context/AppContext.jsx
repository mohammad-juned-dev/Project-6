import { createContext , useEffect, useState} from "react";
import { VITE_CURRENCY } from "../../data";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

 export const AppContextProvider = (props) => {
const currency = VITE_CURRENCY
const [allCourses, setAllCourses] = useState([])
const [isEducator, setIsEducator] = useState(true)
const navigate = useNavigate()


//fetch all courses
const fetchCourses = async()=>{
  setAllCourses(dummyCourses)
}

//calculate the rating of each course
const calculateRating =(course)=>{
  if(course.courseRatings.length ===0){
    return 0
  }
  let totalRating =0
  course.courseRatings.forEach(rating => {
    totalRating =rating.rating +totalRating
  });

  return totalRating/course.courseRatings.length
}

useEffect(()=>{
fetchCourses()
},[])

  const value = {
    currency,allCourses,navigate,calculateRating,setIsEducator,isEducator
  };
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  );
};
