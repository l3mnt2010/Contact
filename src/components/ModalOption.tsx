import React, { useState } from "react";
import Image from "next/image";
import arrowright from "../../public/images/arrow_right.png";
import ModalDelete from "./ModalDelete";

interface Sort {
  sortUp: () => void;
  sortReserver: () => void;
}

const ModalOption: React.FC<Sort> = (props) => {
  const [isSort, setIsSort] = useState(false);
  const [openDel, setOpenDel] = useState(false);

  return (
    <div
      className={
        openDel
          ? "bg-slate-500 bg-opacity-70 mt-10 ml-10 w-52"
          : "mt-10 ml-10 w-52"
      }
    >
      <div className="w-full h-20 shadow-lg bg-white px-3">
        <div className={isSort ? "flex" : "flex"}>
          <h1
            onClick={() => {
              setIsSort(!isSort);
            }}
            className={isSort ? "font-thin text-sm" : "font-bold"}
          >
            Sort by
          </h1>
          <Image
            onClick={() => {
              setIsSort(!isSort);
            }}
            src={arrowright}
            alt="Landscape picture"
            width={15}
            height={15}
          />
        </div>
        {isSort ? (
          <div className="block mt-3">
            <h1
              onClick={() => {
                props.sortUp();
              }}
              className="font-bold hover:bg-gray-200"
            >
              A-Z
            </h1>
            <h1
              onClick={() => {
                props.sortReserver();
              }}
              className="font-bold hover:bg-gray-200"
            >
              Z-A
            </h1>
          </div>
        ) : (
          <p
            onClick={() => {
              setOpenDel(!openDel);
            }}
            className="font-bold mt-2"
          >
            Delete all
          </p>
        )}
      </div>

      <div className="fixed right-5 top-1/4 h-80">
        {!openDel && (
          <ModalDelete
            title="Delete everything?"
            text="Are you sure you want to remove everything"
            onClose={() => {
              setOpenDel(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default ModalOption;
