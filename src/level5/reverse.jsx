import React, { useState } from "react";

const reverse = () => {
  const [arr, setArr] = useState("");
  const [reversedArray, setReversedArray] = useState("");

  const handleArr = (e) => {
    setArr(e.target.value);
  };

  const reverseArray = (e) => {
    e.preventDefault();
    const newArray = arr.split(",").reduce((accumulator, value) => {
      return [value, ...accumulator];
    }, []);
    setReversedArray(newArray.join(","));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[20vh]">
      <h1 className="font-medium text-[30px] mb-[40px]">Convert JS to ReactJs</h1>
      <div>
        Input: <input
        className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
        type="text"
        onChange={handleArr}
      />
      </div>
      <button className="cursor-pointer p-[20px] border-[2px] mt-[20px] mb-[40px] rounded-[8px] hover:bg-[#ffc100]" type="submit" onClick={reverseArray}>Reverse</button>
      <div>
        Output: <input
        className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] p-[20px] focus:outline-none"
        type="text"
        onChange={handleArr}
        value={reversedArray}
        disabled
      />
      </div>
    </div>
  );
};

export default reverse;
