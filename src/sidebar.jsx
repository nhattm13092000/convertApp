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
    </div>
  );
};

export default sidebar;
