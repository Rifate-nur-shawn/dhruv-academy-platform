import React from "react";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import BodyGrains from "../../assets/body-grains.png";

const bgGrainy = {
  backgroundImage: `url(${BodyGrains})`,
  backgroundRepeat: "repeat",
};

const FocusOn = () => {
  return (
    <>
      <section style={bgGrainy} className="py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              WHAT WE FOCUS ON
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* First Row - 3 Cards */}
            <div className="bg-[#1f1f1f] p-6 rounded-2xl text-left relative">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <IoChatboxEllipsesSharp className="text-xl text-black" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                REAL-
                <br />
                WORLD
                <br />
                SKILLS
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We teach practical real-world skills that we truly believe can
                have a positive impact on your life.
              </p>
            </div>

            <div className="bg-[#1f1f1f] p-6 rounded-2xl text-left relative">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <IoChatboxEllipsesSharp className="text-xl text-black" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                ON-
                <br />
                DEMAND
                <br />
                COURSE
                <br />
                VIDEOS
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                You can watch our courses on a mobile or computer as many time
                as you like, with lifetime access.
              </p>
            </div>

            <div className="bg-[#1f1f1f] p-6 rounded-2xl text-left relative">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <IoChatboxEllipsesSharp className="text-xl text-black" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                EFFECTIVE
                <br />
                FORMAT
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn in the engaging format that Dhruv Rathee educational
                videos are known and loved for.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Second Row - 2 Cards */}
            <div className="bg-[#1f1f1f] p-6 rounded-2xl text-left relative">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <IoChatboxEllipsesSharp className="text-xl text-black" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                COMPLETION
                <br />
                CERTIFICATE
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A certificate of completion lets you show off your
                accomplishment
              </p>
            </div>

            <div className="bg-[#1f1f1f] p-6 rounded-2xl text-left relative">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <IoChatboxEllipsesSharp className="text-xl text-black" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                COMPLETION
                <br />
                CERTIFICATE
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A certificate of completion lets you show off your
                accomplishment
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FocusOn;
