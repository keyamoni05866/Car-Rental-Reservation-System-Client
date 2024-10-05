import "./About.css";
const Fleet = () => {
  return (
    <div className="custom-background mt-8 ">
      <h4 className="text-center text-white  pt-10 lg:pt-6 lg:text-3xl">
        Our Fleet: A Perfect Car for Every Occasion
      </h4>
      <div className="lg:flex justify-between  pt-10 px-5 ">
        <div className="shadow-lg lg:w-[200px] lg:h-[200px] mb-10 p-5 text-justify rounded-lg  text-white">
          <h4 className=" text-center ms-3 text-xl mt-3 "> SUVs</h4>
          <span className="font-semibold text-xl ms-3">Popular Model:</span>
          <ul className="list-disc ms-8">
            <li> Toyota RAV4.</li>
            <li> Ford Explorer</li>
            <li> Honda CR-V.</li>
          </ul>
        </div>
        <div className="shadow-lg lg:w-[200px] lg:h-[200px] mb-10 p-5 text-justify rounded-lg  text-white">
          <h4 className=" text-center text-xl mt-3"> Sedans</h4>
          <span className="font-semibold text-xl ms-3">Popular Models:</span>
          <ul className="list-disc ms-8">
            <li> Toyota Camry.</li>
            <li> Nissan Altima</li>
            <li> Honda Accord.</li>
          </ul>
        </div>
        <div className="shadow-lg lg:w-[200px] lg:h-[200px] mb-10 p-5 text-justify rounded-lg  text-white">
          <h4 className=" text-center text-xl mt-3"> Hatchbacks</h4>
          <span className="font-semibold text-xl ms-3">Popular Models:</span>
          <ul className="list-disc ms-8">
            <li> Hyundai i30.</li>
            <li> Ford Focu</li>
            <li> Volkswagen Golf.</li>
          </ul>
        </div>
        <div className="shadow-lg lg:w-[200px] lg:h-[200px] mb-10 p-5 text-justify rounded-lg  text-white">
          <h4 className=" text-center text-xl mt-3"> Convertibles</h4>
          <span className="font-semibold text-xl ms-3">Popular Models:</span>
          <ul className="list-disc ms-8">
            <li> Mazda MX-5 Miat.</li>
            <li> Ford Convertible</li>
            <li> Hyundai Tucson</li>
          </ul>
        </div>
        <div className="shadow-lg lg:w-[200px] lg:h-[200px] mb-10 p-5 text-justify rounded-lg  text-white">
          <h4 className=" text-center text-xl mt-3"> Coupes</h4>
          <span className="font-semibold text-xl ms-3">Popular Models:</span>
          <ul className="list-disc ms-8">
            <li> Chevrolet Camaro.</li>
            <li> Dodge Challenger</li>
            <li> Chevrolet Spark</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
