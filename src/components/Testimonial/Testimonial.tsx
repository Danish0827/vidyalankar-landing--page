"use client";
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { FaAward } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { HiOutlineHandThumbUp } from "react-icons/hi2";

interface Testimonial {
  photo: string;
  name: string;
  rating: number;
  content: string;
}

interface RatingProps {
  rating: number;
  showLabel?: boolean;
  className?: string;
}

const testimonialList: Testimonial[][] = [
  [
    {
      photo:
        "https://lh3.googleusercontent.com/a/ACg8ocKGOw3o1AqNGe0xq_97tL1K4kYlqtjZ6-IcHa5XVs2tbL4vvyc=s40-c-rp-mo-br100",
      name: "Raima Sen",
      rating: 5,
      content:
        '"Vidyalankar classes has helped me stop disliking physics, the subject i used to hate. i love how the faculty teaches the concepts in a friendly and detailed manner. the staff are very friendly and helpful when there are any inconveniences regarding various works."',
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a/ACg8ocIaS_fb4ipz4uytqEf1hTQ1w2K6UNrrjd9hxUW-vYQRzewvvQ=s40-c-rp-mo-br100",
      name: "Mayuri Talashilkar",
      rating: 4.5,
      content:
        '"Vidyalankar classes is a must need classes to every student after 10th ... It has very good faculty , teaching staff ..they conduct weekly test and mentoring session with student as well as with their parents."',
    },
  ],
  [
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjWw2z9U2XtUuq4135boQ9_2BmYMHfhKPJmCvWe4_bGcAbzF-Mc=s40-c-rp-mo-br100",
      name: "Manoj Pawar",
      rating: 5,
      content:
        '"Vidyalankar Classes provides a comprehensive learning experience with knowledgeable instructors and well-structured curriculum. The coaching institute offers excellent support through regular assessments and doubt-solving sessions. Students praise its focus on conceptual clarity and effective exam preparation strategies. However, some may find the class sizes large, impacting individual attention. Overall, Vidyalankar Classes is a reputable choice for those seeking quality coaching for competitive exams."',
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a/ACg8ocKGOw3o1AqNGe0xq_97tL1K4kYlqtjZ6-IcHa5XVs2tbL4vvyc=s40-c-rp-mo-br100",
      name: "Raima Sen",
      rating: 5,
      content:
        '"Vidyalankar classes has helped me stop disliking physics, the subject i used to hate. i love how the faculty teaches the concepts in a friendly and detailed manner. the staff are very friendly and helpful when there are any inconveniences regarding various works."',
    },
  ],
];

const Rating: React.FC<RatingProps> = ({
  rating,
  showLabel,
  className,
  ...rest
}) => (
  <p className={classNames("flex flex-wrap gap-0.5", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = null;
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-[22px] text-yellow-500"
            />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              className="text-[22px] text-yellow-500"
            />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-[22px] text-yellow-200"
            />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

interface TestimonialItemProps {
  item: Testimonial;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ item }) => {
  const { rating, content, photo, name } = item;
  return (
    <div className="bg-white  shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
      <div className="mt-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <img
                src={photo}
                alt={name}
                className="max-w-full h-auto rounded-full border"
                width="47"
              />
            </div>
            <div>
              <h5 className="text-xl break-all font-medium">{name}</h5>
            </div>
          </div>
          <Rating rating={rating} showLabel={false} />
        </div>
        <p className="leading-[1.8] opacity-80 mb-6">{content}</p>
      </div>
    </div>
  );
};

const Testimonial21: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type: "prev" | "next") => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <section id="testimonial" className="lg:pt-40 pt-24">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-center text-center  lg:mb-12">
          <div className="max-w-lg">
            <h2 className="text-3xl leading-none md:text-[45px] text-[#ed3c36] font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          {testimonialList[index].map((item, i) => (
            <div className="col-span-2 md:col-span-1" key={i}>
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center my-12">
          <button
            className="text-lg bg-white shadow-2xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
            onClick={() => handleControl("prev")}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="text-lg bg-white shadow-2xl  opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
            onClick={() => handleControl("next")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="lg:w-10/12 lg:px-10 px-3 m-auto">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/3 w-full px-3 mb-3">
            <div
              style={{
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
              className=" rounded-lg px-5 py-10 flex justify-center gap-3 items-center"
            >
              <div className="icon">
                <HiOutlineHandThumbUp className="text-7xl text-red-600" />
              </div>
              <div className="info">
                <h4 className="text-lg leading-6 text-[#777] font-medium">
                  10+ years of experienced faculty from prestigious institutes.
                </h4>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full px-3 mb-3">
            <div
              style={{
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
              className=" rounded-lg px-5 py-10 flex justify-center gap-3 items-center"
            >
              <div className="icon">
                <LuBadgePercent className="text-7xl text-red-600" />
              </div>
              <div className="info">
                <h4 className="text-lg leading-6 text-[#777] font-medium">
                  Post GATE counseling to guide your career decisions.
                </h4>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full px-3 mb-3">
            <div
              style={{
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
              className=" rounded-lg px-5 py-10 flex justify-center gap-3 items-center"
            >
              <div className="icon">
                <FaAward className="text-7xl text-red-600" />
              </div>
              <div className="info">
                <h4 className="text-lg leading-6 text-[#777] font-medium">
                  Access to high-quality printed study material & resources.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial21;
