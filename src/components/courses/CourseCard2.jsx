
import CardText from "./utility/CardText";
import CourseImg from "../../assets/banner2.png";

const courseData = {
  subtitle: "AI",
  title: "MASTER CHATGPT: TRANSFORM YOUR LIFE WITH AI CHATBOTS",
  description:
    "Artificial Intelligence is changing the world. Learn to use the power of ChatGPT at its full potential to level up your productivity at work, school and at home. Discover the basics of machine learning and prompt engineering.",
  benefits: [
    "Find your niche based on your passion and skills.",
    "Learn to ideate, script, film, and edit videos.",
    "Understand the secret to getting lakhs of followers.",
    "Discover ways to earn money as a creator.",
  ],
  link: "#",
};
const CourseCard2 = () => {
  return (
    <>
      <section className="py-12">
        <div className="bg-[#0e0e0f] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Text content section */}
          <div className="order-1">
            <CardText courseData={courseData} />
          </div>
          {/* Image section */}
          <div className="order-2">
            <img
              src={CourseImg}
              alt="Course"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseCard2;
