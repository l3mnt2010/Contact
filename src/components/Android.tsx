import React, { useState } from "react";
import Image from "next/image";
import search from "../../public/images/Vector (1).png";
import option from "../../public/images/more_vert.png";
import ModalOption from "./ModalOption";
import Searchs from "./Search";
export default function Android() {
  const [isOption, setIsOption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-14 shadow-lg flex flex-row sticky top-0">
      <div className="w-5/6 text-left font-bold text-lg flex items-center pl-5">
        Contacts
      </div>
      <div onBlur={() => setIsOption(false)}>
        {!isOption ? (
          <div className="flex">
            <div className="h-full py-3">
              <Image
                onClick={() => setIsOpen(!isOpen)}
                className=""
                src={search}
                alt="Landscape picture"
                width={20}
                height={20}
              />
            </div>
            {isOpen && <Searchs />}
            <div className="h-full py-2 pl-2">
              <Image
                onClick={() => {}}
                src={option}
                alt="Landscape picture"
                width={26}
                height={26}
              />
            </div>
          </div>
        ) : (
          <div className="relative top-2 right-4">
            <ModalOption />
          </div>
        )}
      </div>
    </div>
  );
}
