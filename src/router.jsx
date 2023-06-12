import React from "react";
import { Route, Routes } from "react-router-dom";
import Reverse from "./level5/reverse"
import Chunk from "./level5/chunk"
import Uniq from "./level5/uniq"
import UniqObj from "./level5/uniqobj"
import TrimAll from "./level5/trimall"
import GroupBy from "./level5/groupby";
import MapKey from "./level5/MapKey";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Reverse />} />
        <Route path="/reverse" element={<Reverse />} />
        <Route path="/chunk" element={<Chunk />} />
        <Route path="/uniq" element={<Uniq />} />
        <Route path="/uniqobj" element={<UniqObj />} />
        <Route path="/trimall" element={<TrimAll />} />
        <Route path="/groupby" element={<GroupBy />} />
        <Route path="/MapKey" element={<MapKey />} />
      </Routes>
    </div>
  );
};

export default router;
