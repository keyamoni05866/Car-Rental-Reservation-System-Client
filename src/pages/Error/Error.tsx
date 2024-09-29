import { Link } from "react-router-dom";
import errorPage from "../../assets/404Page.jpg";

const Error = () => {
  return (
    <div className=" max-w-5xl mx-auto flex justify-center items-center  mb-20">
      <div className=" w-[700px] mx-auto">
        <img src={errorPage} alt="" className="w-full h-[500px]" />
        <h3 className="text-3xl text-center font-semibold">
          Oppsss!!!! <br /> You are in the Wrong Page!!!
        </h3>
        <div className="mt-6 lg:ms-48 ">
          <Link to="/" className="custom-btn">
            Go back to home
          </Link>
          <Link to="/login" className="custom-btn ms-5">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
