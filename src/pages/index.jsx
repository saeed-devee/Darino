import logo from "../assets/images/logo/cropped-logo-1.webp";
import { FiShoppingBag } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

const LandingPage = () => {
  return (
    // Top navbar
    <nav className="max-w-screen mx-8 px-4 py-6 bg-light-primary border-b border-gray-100 flex items-center justify-between gap-5">
      <div className="flex items-center gap-3 cursor-pointer">
        {/* Logo & Brand Name */}
        <img src={logo} alt="دارینو لوگو" className="object-cover size-10" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-AbiExtra">دارینو</h1>
          <h4 className="text-lg text-gray-400 font-vazir-light">
            دارو و تجهیزات داروخانه
          </h4>
        </div>
      </div>
      {/* search bar */}
      <main
        className="capsule-border p-2"
      >
        <div>
          <label
            className="flex items-center relative z-10"
            htmlFor="searchbox"
          >
            <input
              type="text"
              placeholder="جستجو برای..."
              id="searchBox"
              className="flex-1 w-120 px-4 py-3 rounded-full transition duration-200 focus:ring-1 focus:ring-[#91e5a4] focus:outline-0 placeholder:font-vazir-light"
            />
            <IoSearchOutline className="bg-[#91e5a4] -ml-1 px-2 w-11 h-full rounded-full absolute left-1 top-0 bottom-0 z-20" />
          </label>
        </div>
      </main>

      {/* login & cart */}
      <main
        className="capsule-border"
      >
        <div className="flex items-center space-x-2 px-3 py-4 *:border *:border-gray-200 *:px-3 *:py-2 *:rounded-3xl">
          <button className="flex items-center space-x-4 cursor-pointer bg-white shadow transition ease-linear hover:bg-blue-primary hover:*:text-white hover:-translate-y-0.5">
            <span className="relative before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-4 before:bg-gray-300 before:rounded-full text-gray-400">
              0
            </span>
            <FiShoppingBag className="text-gray-800 size-5" />
          </button>
          <button className="flex items-center space-x-2 cursor-pointer bg-white shadow transition ease-linear hover:bg-blue-primary hover:*:text-white hover:-translate-y-0.5">
            <span className="text-gray-600 font-vazir-md">ورود به حساب</span>
            <BiLogIn className="text-gray-800 size-6" />
          </button>
        </div>
      </main>
    </nav>
  );
};

export default LandingPage;
