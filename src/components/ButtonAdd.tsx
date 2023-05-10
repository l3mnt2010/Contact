import React from "react";
import Image from "next/image";
import plus from "../../public/images/Vector (2).png";
import { useRouter } from "next/router";

const ButtonAdd = () => {
  const router = useRouter();
  return (
    <div className="fixed right-10 top-3/4">
      <button
        onClick={() => {
          router.push("/addcontact");
        }}
        className="border w-12 h-12 border-white rounded-full bg-new hover:bg-cyan-400"
      >
        <Image
          className="mx-auto"
          src={plus}
          alt="Landscape picture"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default ButtonAdd;
