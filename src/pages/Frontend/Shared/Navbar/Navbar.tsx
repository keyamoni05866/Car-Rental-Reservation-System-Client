import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/cars">Cars</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/booking">Booking</Link>
              </li>
            </ul>
          </div>
          <div className=" flex">
            <img src={"logo"} alt="" className="w-10   rounded-xl" />
            <h5 className="text-xl  ms-1  font-semibold  primary-color uppercase">
              RentCars
            </h5>
          </div>
        </div>

        {/* for large  */}
        <div className="navbar-center   hidden lg:flex secondary-color ">
          <ul className="menu menu-horizontal  text-[15px]     ">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link to="/login" className=" text-[15px] font-medium mt-1  me-5 ">
            Sign In
          </Link>
          <Link
            to="/register"
            className=" mt-2 px-auto  pb-2 px-5 pt-1  rounded-lg font-medium primary-bg-color text-[15px] text-white hover:bg-[#051c34] "
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
