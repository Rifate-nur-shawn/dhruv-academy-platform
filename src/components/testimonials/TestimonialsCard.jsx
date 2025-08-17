import React from "react";

const TestimonialsCard = ({ id, name, review, rating }) => {
  return (
    <>
      <section className="p-6 md:p-8 bg-[#222222] rounded-3xl flex justify-center items-center min-h-[250px]">
        <div className="text-left space-y-4">
          <div className="text-6xl text-gray-500 leading-none">,,</div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {review}
          </p>
          <div className="flex items-center gap-3 pt-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
              {name.charAt(0)}
            </div>
            <div>
              <p className="text-white font-semibold">{name}</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${
                      index < Math.floor(rating)
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsCard;
