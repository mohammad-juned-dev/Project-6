import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-10  py-10">
      <h2 className="text-3xl font-semibold">Testimonials</h2>
      <p className="text-gray-500 text-md">
        Hear from our learners as they share their journeys of transformation,
        success, and how <br /> our plateform has made a difference in their
        lives.{" "}
      </p>
      <div className="grid grid-cols-3 gap-6 px-[20rem]">
        {dummyTestimonial.map((testimonial, index) => {
          return (
            <div className="border-2 border-gray-300 pb-10 rounded-md flex flex-col" key={index}>
              <div className="flex gap-3 items-center py-3 justify-center mb-3 bg-gray-300/45">
                <img
                  className="h-[3rem]"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="text-start">
                  <h1 className="font-semibold">{testimonial.name}</h1>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex flex-col items-start px-3 gap-4">
                <div className="flex gap-1">
                  {[
                    [...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < Math.floor(testimonial.rating)
                            ? assets.star
                            : assets.star_blank
                        }
                        alt="star"
                      />
                    )),
                  ]}
                </div>
                <p className="text-start text-gray-500">
                  {testimonial.feedback}
                </p>
              </div>
              <a  href="#" className="ml-3 inline-block text-blue-500 self-start underline mt-5">read more</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
