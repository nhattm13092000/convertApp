import React, { useState } from 'react';

const trimall = () => {
    const [arr, setArr] = useState("");
    const [trimStr, setTrimStr] = useState("");
  
    const handleArr = (e) => {
      setArr(e.target.value);
    };
  
    const trimstring = () => {
      const newStr = arr.replace(/\s+/g," ").trim();
      setTrimStr(newStr);
    };
  
    return (
      <div className="flex flex-col justify-center items-center mt-[20vh]">
        <h1 className="font-medium text-[30px] mb-[40px]">
          Convert JS to ReactJs
        </h1>
        <div>
          <span className="w-[50px] inline-block">Input:</span>
          <input
            className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
            type="text"
            onChange={handleArr}
          />
        </div>
        <button
          className="cursor-pointer p-[20px] border-[2px] mt-[20px] mb-[40px] rounded-[8px] hover:bg-[#ffc100]"
          type="submit"
          onClick={trimstring}
        >
          Trim
        </button>
        <div>
          <span className="w-[50px] inline-block">Output:</span>
          <input
            className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] p-[20px] focus:outline-none"
            type="text"
            onChange={handleArr}
            value={trimStr}
            disabled
          />
        </div>
      </div>
    );
};

export default trimall;