import React from "react";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="flex flex-col bg-[#fff] border-r-[2px]">
      <NavLink to="/reverse">Reverse</NavLink>
      <NavLink to="/chunk">Chunk</NavLink>
      <NavLink to="/uniq">Uniq</NavLink>
      <NavLink to="/uniqobj">UbiqOBJ</NavLink>
      <NavLink to="/trimall">Trim All</NavLink>
      <NavLink to="/groupby">GroupBy</NavLink>
      <NavLink to="/MapKey">MapKey</NavLink>
      <NavLink to="/switchOrder">Switch Order</NavLink>
      <NavLink to="/sumAll">Sum All</NavLink>
    </div>
  );
};

export default sidebar;
