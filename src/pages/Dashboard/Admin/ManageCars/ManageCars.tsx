import CarTables from "./CarTables";

import CreateCarModal from "./CreateCarModal";

const ManageCars = () => {
  return (
    <div className="lg:mx-9">
      <CreateCarModal />
      <div className="divider"></div>
      <CarTables />
    </div>
  );
};

export default ManageCars;
