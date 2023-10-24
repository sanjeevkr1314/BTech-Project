import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/upload-document"
            className="list-group-item list-group-item-action"
          >
            Upload Document
          </NavLink>
          <NavLink
            to="/dashboard/user/all-documents"
            className="list-group-item list-group-item-action"
          >
            Your documents
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
