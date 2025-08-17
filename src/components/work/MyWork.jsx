
import Dhruv1 from "../../assets/dhruv1.png";
import Dhruv2 from "../../assets/dhruv2.png";
import Dhruv3 from "../../assets/dhruv3.jpeg";
import { GoVerified } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const CardData = [
  {
    id: 1,
    channelName: "Dhruv Rathee",
    handle: "dhruvrathee",
    subscribers: "12M+",
    videos: "540+",
    link: "#",
    image: Dhruv1,
  },
  {
    id: 2,
    channelName: "Dhruv Rathee Vlogs",
    handle: "DhruvRatheeVlogs",
    subscribers: "12M+",
    videos: "540+",
    link: "#",
    image: Dhruv2,
  },
  {
    id: 3,
    channelName: "Dhruv Rathee Shorts",
    handle: "DRshorts",
    subscribers: "12M+",
    videos: "540+",
    link: "#",
    image: Dhruv3,
  },
];
const MyWork = () => {
  return (
    <>
      <section className="py-12 md:py-24 bg-[#242424]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              MY WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h[80vh]">
            {CardData.map((card) => (
              <div
                key={card.id}
                className="bg-[#151212] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* YouTube-style thumbnail */}
                <div className="relative px-4 pb-4">
                  <img
                    src={card.image}
                    alt={card.channelName}
                    className="w-full h-100 object-cover rounded-lg"
                  />
                  {/* YouTube Play Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 w-8 h-6 rounded-sm flex items-center justify-center">
                      <FaPlay className="text-white text-xs ml-0.5" />
                    </div>
                  </div>
                  {/* YouTube logo for Shorts */}
                  {card.id === 3 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center">
                        <FaPlay className="text-white text-2xl ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-12  ">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {card.channelName}
                    </h3>
                    <GoVerified className="text-gray-400 text-lg" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4">@{card.handle}</p>

                  <div className="flex justify-between items-center mb-6">
                    <div className="text-left">
                      <p className="text-lg font-bold text-white">
                        {card.subscribers} Subscribers
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-white">
                        {card.videos} Videos
                      </p>
                    </div>
                  </div>

                  <button className="w-full border border-gray-500 text-white text-center py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
                    VIEW CHANNEL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
