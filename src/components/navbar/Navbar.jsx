import React from "react";
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu";
const MenuData = [
  {
    id: 1,
    title: "Home",
    url: "#",
  },
  {
    id: 2,
    title: "Youtube Blueprint Course",
    url: "#",
  },
  {
    id: 3,
    title: "ChatGPT Course",
    url: "#",
  },
  {
    id: 4,
    title: "Time Management Course",
    url: "#",
  },
  {
    id: 5,
    title: "E-books",
    url: "#",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="container">
        <div className="bg-black/60 backdrop-blur-3xl rounded-full py-3 px-4 flex items-center justify-between relative z-[99999]">
          {/* Logo section */}
          <div>
            <img src={Logo} alt="" className="max-w-[120px]" />
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {MenuData.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <button className="border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 text-sm">
                  Login
                </button>
              </li>
            </ul>
          </div>
          {/* Mobile hamburger menu */}
          <div className="block md:hidden">
            <RxHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        {/* Mobile Responsive menu */}
        <ResponsiveMenu isOpen={isOpen} />
      </nav>
    </>
  );
};

export default Navbar;
