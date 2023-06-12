import React, { useState } from "react";

const chunk = () => {
  const [arr, setArr] = useState("");
  const [size, setSize] = useState(0);
  const [chunkSize, setChunkSize] = useState([]);

  const handleArr = (e) => {
    setArr(e.target.value);
  };

  const handleSize = (e) => {
    setSize(parseInt(e.target.value));
  };

  const chunkArr = (e) => {
    e.preventDefault();
    const newArr = [];
    const array = arr.split(",");
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      newArr.push(chunk);
    }
    setChunkSize(newArr);
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
      <div>
        <span className="w-[50px] inline-block">Size:</span>
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] p-[20px] focus:outline-none"
          type="number"
          onChange={handleSize}
        />
      </div>
      <button
        className="cursor-pointer p-[20px] border-[2px] mt-[20px] mb-[40px] rounded-[8px] hover:bg-[#ffc100]"
        type="submit"
        onClick={chunkArr}
      >
        Chunk
      </button>
      <div>
        <span className="w-[50px] inline-block">Output:</span>
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] p-[20px] focus:outline-none"
          type="text"
          value={JSON.stringify(chunkSize)}
          disabled
        />
      </div>
    </div>
  );
};

export default chunk;