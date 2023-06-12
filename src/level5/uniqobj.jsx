import React, { useState } from "react";

const uniq = () => {
  const [arr, setArr] = useState("");
  const [uniqArr, setUniqArr] = useState([]);

  const handleArr = (e) => {
    setArr(e.target.value);
  };

  const uniqArray = () => {
    let array;
    try {
      array = eval("(" + arr + ")");
    } catch (error) {
      console.error("Invalid JSON format");
      return;
    }

    const uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < uniqueArr.length; j++) {
        if (
          array[i].x === uniqueArr[j].x &&
          array[i].y === uniqueArr[j].y
        ) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArr.push(array[i]);
      }
    }
    setUniqArr(uniqueArr);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[20vh]">
      <h1 className="font-medium text-[30px] mb-[40px]">Convert JS to ReactJs</h1>
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
        onClick={uniqArray}
      >
        Uniq
      </button>
      <div>
        <span className="w-[50px] inline-block">Output:</span>
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] p-[20px] focus:outline-none"
          type="text"
          value={JSON.stringify(uniqArr)}
          disabled
        />
      </div>
    </div>
  );
};

export default uniq;
