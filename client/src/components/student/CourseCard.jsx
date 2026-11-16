import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);
  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border-[1px] border-gray-400 rounded-xl flex flex-col mb-5 gap-5"
    >
      <img className="overflow-hidden rounded-t-xl" src={course.courseThumbnail} alt="" />
      <div className="flex  flex-col px-3 py-2">
        <h1 className="self-start text-black text-[15px]">{course.courseTitle}</h1>
        <h1  className="self-start  text-black text-[15px]">{course.educator?.name ?? ""}</h1>
        <div className="flex gap-7">
          <p className="text-black text-[15px]">4.5</p>
          <div className="flex -ml-5">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="star" />
            ))}
          </div>

          <p className=" text-gray-400 text-[15px]">22</p>
        </div>
        <p className="self-start text-black text-[15px]">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
