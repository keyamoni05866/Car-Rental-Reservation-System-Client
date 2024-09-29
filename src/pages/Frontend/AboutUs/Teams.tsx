import pic1 from "../../../assets/AboutPhotos/Teams/member1.png";
import pic2 from "../../../assets/AboutPhotos/Teams/member2.png";
import pic3 from "../../../assets/AboutPhotos/Teams/member3.png";
import pic4 from "../../../assets/AboutPhotos/Teams/member4.png";

const Teams = () => {
  return (
    <div className="  lg:mt-20  mt-40 mb-32">
      <div className="divider ">Our Teams</div>
      <div className="lg:flex justify-between mt-20 ">
        <div className="p-3 w-[300px]   h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto mb-10 ">
          <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
            <img
              src={pic1}
              alt=""
              className="bg-base-300 w-[100px] h-[80px] rounded-full"
            />
          </div>
          <h3 className=" text-xl uppercase text-center  ">Keya Moni</h3>
          <span className="text-md  ms-20 text-center">Founder & CEO</span>

          <p className="text-justify text-[15px]  mt-1">
            Keya Moni is an avid camper with over 20 years of experience in the
            outdoor industry. Her passion for camping and adventure inspired him
            to create this type of plateform
          </p>
        </div>
        <div className="p-3  w-[300px]  h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto mb-10 ">
          <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
            <img
              src={pic2}
              alt=""
              className="bg-base-300 w-[100px] h-[80px] rounded-full"
            />
          </div>
          <h3 className=" text-xl uppercase text-center   ">Jhon Doe</h3>
          <span className=" text-[15px]   ms-20  text-center">
            {" "}
            Marketing Officer
          </span>

          <p className="text-justify text-[15px] mt-1">
            Jhon brings her creative expertise and marketing acumen to CityCar
            Rental, ensuring that our brand resonates with outdoor lovers
            everywhere .He leads our efforts to connect with customers.
          </p>
        </div>
        <div className="p-3  w-[300px]  h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto mb-10 ">
          <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
            <img
              src={pic3}
              alt=""
              className="bg-base-300 w-[100px] h-[80px] rounded-full"
            />
          </div>
          <h3 className=" text-xl uppercase text-center   ">Mike Brown</h3>
          <span className=" text-[15px]   ms-20 text-center">
            {" "}
            Product Development
          </span>

          <p className="text-justify text-[15px] mt-1">
            Mike is an outdoor gear expert with a deep understanding of what
            makes a trip successful.Mike's hands-on experience in the field
            helps us choose the best gear for our customers.
          </p>
        </div>
        <div className="p-3  w-[300px] h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto mb-10">
          <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
            <img
              src={pic4}
              alt=""
              className="bg-base-300 w-[100px] h-[80px] rounded-full"
            />
          </div>
          <h3 className=" text-xl uppercase text-center   ">Robert King</h3>
          <span className=" text-[15px]  ms-20  text-center">
            {" "}
            Operations Officer
          </span>

          <p className="text-justify text-[15px] mt-1">
            With his extensive background in supply chain management and a
            passion for efficient processes, Robert plays a key role in making
            sure our products reach customers quickly and reliably.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
