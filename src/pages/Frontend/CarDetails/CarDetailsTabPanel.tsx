import { Key } from "react";
import { TCar } from "../../../Types";

const CarDetailsTabPanel = ({ car }: { car: TCar }) => {
  return (
    <div className="lg:max-w-[70%]  w-full border shadow-sm border-[#cddceb] rounded-md p-4 lg:p-8">
      <div className="bg-[#dfeefd]     py-2 rounded-md   ">
        {" "}
        <h4 className="primary-color  font-[540] lg:text-md text-[18px] ms-4    ">
          Car Specifications
        </h4>
      </div>

      <div className="lg:ms-4">
        <div className="flex   items-center  text-[18px] my-4 border-b-2  pb-2">
          <span className="font-semibold">Name:</span>
          <p className=" ms-11 font-light">{car?.name}</p>
        </div>
        <div className="flex items-center  text-[18px] my-4 border-b-2  pb-2">
          <span className="font-semibold">Model:</span>
          <p className="ms-11 font-light">{car?.model}</p>
        </div>
        <div className="flex items-center  text-[18px] my-4 border-b-2  pb-2">
          <span className="font-semibold">Status:</span>
          <p className="ms-11 font-light uppercase">{car?.status}</p>
        </div>
        <div className="flex  items-center  text-[18px] my-4 border-b-2  pb-2">
          <span className="font-semibold">Type:</span>
          <p className="ms-14 font-light">{car?.carType}</p>
        </div>
        <div className=" flex  items-center  text-[18px] my-4 border-b-2  pb-2">
          <span className="font-semibold">Color:</span>
          <p className="ms-14 font-light">{car?.color}</p>
        </div>
        <div className=" flex  items-center  text-[18px] my-4 border-b-2  pb-2">
          <span className="font-semibold">Year:</span>
          <p className="ms-16 font-light">{car?.year}</p>
        </div>
        <div className=" flex  items-center  text-[18px] my-4 border-b-2  pb-2">
          <span className="font-semibold">Electric:</span>
          <p className="ms-11 font-light">{car?.isElectric}</p>
        </div>
      </div>
      <div className="bg-[#dfeefd]     py-2 rounded-md mt-8  ">
        {" "}
        <h4 className="primary-color  font-[540] lg:text-md text-[18px] ms-4    ">
          Car Features
        </h4>
      </div>
      <ul className="list-decimal space-y-2 text-xl list-inside ms-3 mt-4 ">
        {car?.features.map((feature: string, index: Key | null | undefined) => (
          <li key={index} className="">
            {feature}
          </li>
        ))}
      </ul>

      <div className="bg-[#dfeefd]     py-2 rounded-md mt-6  ">
        {" "}
        <h4 className="primary-color  font-[540] lg:text-md text-[18px] ms-4    ">
          Car Description
        </h4>
      </div>
      <p className="text-[16px] text-justify my-4 lg:ms-3">
        {car?.description}
      </p>
    </div>
  );
};

export default CarDetailsTabPanel;
