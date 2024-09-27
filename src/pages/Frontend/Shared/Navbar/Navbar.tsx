import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../Redux/hook";
import { currentUser } from "../../../../Redux/features/auth/authSlice";
import logo from "../../../../assets/logo.png";
const Navbar = () => {
  const userInfo = useAppSelector(currentUser);
  // console.log(userInfo?.role);
  return (
    <>
      <div className="navbar ">
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
          <div className=" flex items-center mt-2">
            <img
              src={logo}
              alt=""
              className="lg:size-10 size-7    rounded-xl"
            />
            <h5 className="lg:text-xl text-lg  ms-1  font-semibold  primary-color uppercase">
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
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>

            {userInfo ? (
              <li>
                {userInfo.role === "admin" ? (
                  <Link to={`/${userInfo?.role}/dashboard`}>Dashboard</Link>
                ) : (
                  <Link to={`/${userInfo?.role}/profile-management`}>
                    Dashboard
                  </Link>
                )}
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end ">
          <Link to="/login" className=" text-[15px] font-medium mt-1  me-5  ">
            Sign In
          </Link>
          <Link to="/register" className="custom-btn mt-1 ">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
