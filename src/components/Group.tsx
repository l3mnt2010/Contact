import React from "react";
import Image from "next/image";
import empty from "../../public/images/Vector.png";

const Group = () => {
  return (
    <div className="w-full h-full flex-row py-52">
      <Image
        className="mx-auto"
        src={empty}
        alt="Landscape picture"
        width={80}
        height={80}
      />
      <p className="w-full text-center pt-5 text-sm text-gray-500">
        You have no contacts yet
      </p>
    </div>
  );
};

export default Group;
