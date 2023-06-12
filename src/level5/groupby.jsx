import React, { useState } from "react";

const groupby = () => {
  const [arr, setArr] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const handleArr = (e) => {
    setArr(e.target.value);
  };

  const handleKey = (e) => {
    setKey(e.target.value);
  };

  const uniqArrayObject = () => {
    let newarr = JSON.parse(arr);
    let re = newarr.reduce((acc, currentValue) => {
      let groupKey = currentValue[key];
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(currentValue);
      return acc;
    }, {});
    console.log(re);
    return re;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let re = uniqArrayObject();
    setResult(JSON.stringify(re));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[20vh]">
      <h1 className="font-medium text-[30px] mb-[40px]">Convert JS to ReactJs</h1>
      <div>
        Input:
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
          type="text"
          value={arr}
          onChange={handleArr}
        />
      </div>
      <div>
        Field:
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
          type="text"
          onChange={handleKey}
        />
      </div>
      <button
        className="cursor-pointer p-[20px] border-[2px] mt-[20px] mb-[40px] rounded-[8px] hover:bg-[#ffc100]"
        type="submit"
        onClick={handleSubmit}
      >
        Group By
      </button>
      <div>
        Output:
        <textarea
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[10vh] ml-[20px] p-[20px] focus:outline-none"
          value={result}
          disabled
        />
      </div>
    </div>
  );
};

export default groupby;
