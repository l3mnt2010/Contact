import React, { useState } from "react";
import Image from "next/image";
import search from "../../public/images/Vector (1).png";
import back from "../../public/images/arrow_back_ios.png";
import option from "../../public/images/more_vert.png";
import ModalOption from "./ModalOption";
import Searchs from "./Search";

interface Sort {
  sortUp: () => void;
  sortReserver: () => void;
}

const Navigate: React.FC<Sort> = (props) => {
  const [isOption, setIsOption] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div
      onBlur={() => {
        setIsOption(false);
      }}
      className="w-full h-16 shadow-lg flex"
    >
      <div className="flex">
        <div className="w-auto h-full flex items-center">
          {isSearch ? (
            <Image
              onClick={() => {
                setIsSearch(false);
              }}
              src={back}
              alt="back"
              width={20}
              height={20}
            />
          ) : (
            <p className="font-bold text-lg ml-5">Contacts</p>
          )}
        </div>
        <div className="w-auto h-full flex items-center">
          {isSearch ? (
            <Searchs />
          ) : (
            <Image
              onClick={() => {
                setIsSearch(true);
              }}
              className={!isOption ? "hidden" : ""}
              src={search}
              alt="Landscape picture"
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
      <div className="w-auto h-full flex items-center">
        {isOption ? (
          <ModalOption
            sortUp={() => {
              props.sortUp();
            }}
            sortReserver={() => {
              props.sortReserver();
            }}
          />
        ) : (
          <Image
            onClick={() => {
              setIsOption(!isOption);
            }}
            src={option}
            alt="Landscape picture"
            width={26}
            height={26}
          />
        )}
      </div>
    </div>
  );
};

export default Navigate;
