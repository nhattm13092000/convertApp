import React, { useState } from "react";

const mapkey = () => {
  const [keys, setKeys] = useState([]);
  const [collections, setCollections] = useState([]);
  const [reorderedCollections, setReorderedCollections] = useState([]);

  const handleKeysChange = (event) => {
    setKeys(event.target.value.split(","));
  };

  const handleCollectionsChange = (event) => {
    setCollections(JSON.parse(event.target.value));
  };

  const reorderCollections = () => {
    let reordered = collections.map((obj) => {
      return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {});
    });

    reordered = reordered.filter((obj) =>
      Object.values(obj).every((val) => val !== undefined)
    );

    setReorderedCollections(reordered);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[20vh]">
      <h1 className="font-medium text-[30px] mb-[40px]">Convert JS to ReactJs</h1>
      <div>
        Input Keys:
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
          type="text"
          onChange={handleKeysChange}
        />
      </div>
      <div>
        Collections:
        <textarea
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[10vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
          onChange={handleCollectionsChange}
        />
      </div>
      <button
        className="cursor-pointer p-[20px] border-[2px] mt-[20px] mb-[40px] rounded-[8px] hover:bg-[#ffc100]"
        type="submit"
        onClick={reorderCollections}
      >
        Map Key
      </button>
      <div>
        Output:
        <textarea
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[20vh] ml-[20px] p-[20px] focus:outline-none"
          value={JSON.stringify(reorderedCollections)}
          disabled
        />
      </div>
    </div>
  );
};

export default mapkey;
