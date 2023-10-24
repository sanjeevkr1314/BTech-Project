import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";

const AllDocuments = () => {
  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Documents</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDocuments;
