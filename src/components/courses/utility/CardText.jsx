import React from "react";

const CardText = ({ courseData }) => {
  const { title, subtitle, description, link, benefits } = courseData;
  return (
    <>
      <section>
        <div className="p-6 md:p-8 space-y-4">
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            {subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          <div className="space-y-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={link}
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardText;
