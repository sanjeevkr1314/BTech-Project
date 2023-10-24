import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const UserDashboard = () => {
  const [auth] = useAuth();
  const userStatus = auth?.user?.status;

  return (
    <>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3 adminPanel">
            {userStatus === "Approved" && <UserMenu />}
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>
                {" "}
                Name : {auth?.user?.fName} {auth?.user?.lName}
              </h3>
              <h3> Email : {auth?.user?.email}</h3>
              <h3> Status : {auth?.user?.status}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
