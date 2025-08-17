import React from "react";
import CardText from "./utility/CardText";
import CourseImg from "../../assets/banner1.png";

const courseData = {
  subtitle: "Content Creation",
  title: "The YouTube Blueprint: Make Content Creation Your Career",
  description:
    "Have you ever dreamt of becoming a Youtuber? This is your blueprint to getting there. Whether you want to take up content creation as a full time career or a part-time job, this all-in-one course is your perfect plan of action.",
  benefits: [
    "Find your niche based on your passion and skills.",
    "Learn to ideate, script, film, and edit videos.",
    "Understand the secret to getting lakhs of followers.",
    "Discover ways to earn money as a creator.",
  ],
  link: "#",
};
const CourseCard = () => {
  return (
    <>
      <section className="py-12">
        <div className="bg-[#0e0e0f] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Image section */}
          <div className="order-2 md:order-1">
            <img
              src={CourseImg}
              alt="Course"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
          {/* Text content section */}
          <div className="order-1 md:order-2">
            <CardText courseData={courseData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseCard;
