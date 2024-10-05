import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" secondary-bg-color ">
      <footer className="footer text-white p-10 max-w-screen-xl mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/aboutUs" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms&conditions" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy&policy" className="link link-hover">
            Privacy policy
          </Link>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className=" ">
          <h6 className="footer-title">Contact Information</h6>

          <div className="  ms-2 ">
            <div className="flex items-center gap-5 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="size-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
              <span className=" font-semibold">+101 24242 423</span>
            </div>

            <div className="flex items-center gap-5 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <span className=" font-semibold">keya05866@gmail.com</span>
            </div>
            <div className="flex items-center gap-5 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <span className=" font-semibold">
                Kamrangir-Chor, Dhaka-Bangladesh
              </span>
            </div>
          </div>

          <div className=" ms-3 flex  gap-5 items-center">
            <div>
              <h4 className="text-lg font-semibold">Social Links :</h4>
            </div>
            <div className=" flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100036332574044"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>

              <a
                className=""
                href="https://www.linkedin.com/in/keya-moni-43a437221/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
