import React, { useState } from "react";

const SumAll = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const calculateSum = () => {
    const arr = JSON.parse(inputValue);

    if (!Array.isArray(arr)) {
      return {};
    }

    const sum = {};

    arr.forEach(obj => {
      Object.keys(obj).forEach(key => {
        if (!isNaN(obj[key])) {
          sum[key] = (sum[key] || 0) + parseInt(obj[key]);
        }
      });
    });

    return sum;
  };

  const handleCalculate = () => {
    const sum = calculateSum();
    setResult(sum);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[20vh]">
    <h1 className="font-medium text-[30px] mb-[40px]">Convert JS to ReactJs</h1>
    <div>
      Input: <input
      className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
    </div>
    <button className="cursor-pointer p-[20px] border-[2px] mt-[20px] mb-[40px] rounded-[8px] hover:bg-[#ffc100]" type="submit" onClick={handleCalculate}>Sum All</button>
    <div>
      Output: <input
      className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] p-[20px] focus:outline-none"
      type="text"
      value={JSON.stringify(result)}
      disabled
    />
    </div>
  </div>
  );
};

export default SumAll;
