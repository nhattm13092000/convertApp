import React, { useState } from "react";

const SwitchOrder = () => {
  const [arr, setArr] = useState([
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 }
  ]);

  const switchOrder = (id, newOrder) => {
    const updatedArr = arr.map((obj) => {
      if (obj.id === id) {
        return { ...obj, order: newOrder };
      } else if (obj.order === newOrder) {
        return { ...obj, order: obj.order + 1 };
      }
      return obj;
    });

    setArr(updatedArr);
  };

  const handleSwitchOrder = () => {
    const id = parseInt(prompt("Nhập id của object:"));
    const newOrder = parseInt(prompt("Nhập thứ tự mới:"));

    switchOrder(id, newOrder);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[20vh]">
      <h1 className="font-medium text-[30px] mb-[40px]">
        Switch Order: Viết function để thay đổi thứ tự order của các object
      </h1>
      <div>
        Input:{" "}
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] mb-[20px] p-[20px] focus:outline-none"
          type="text"
          value={JSON.stringify(arr)}
          disabled
        />
      </div>
      <button
        className="cursor-pointer p-[20px] border-[2px] mt-[20px] mb-[40px] rounded-[8px] hover:bg-[#ffc100]"
        type="submit"
        onClick={handleSwitchOrder}
      >
        Switch Order
      </button>
      <div>
        Output:{" "}
        <input
          className="border-solid border-[2px] border-[#000] w-[40vw] h-[6vh] ml-[20px] p-[20px] focus:outline-none"
          type="text"
          value={JSON.stringify(arr)}
          disabled
        />
      </div>
    </div>
  );
};

export default SwitchOrder;
