import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="flex flex-col  items-center justify-center gap-5 mt-[5%] px-10">
      <h2 className="text-[25px] font-semibold">Learn fromm the Best</h2>

      <p className="text-gray-500 text-[15px]">
        Discover our top-rated courses across various categories. From coding
        and design to <br/>business and wellness, our coursese are desogned to deliver
        results.
      </p>
      <div className="grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4 ">
        {allCourses.slice(0, 4).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="px-5 py-2 rounded-md border-[1px] border-black bg-blue-600 hover:bg-white text-white hover:text-blue-600"
      >
        Show all Courses
      </Link>
    </div>
  );
};

export default CourseSection;
