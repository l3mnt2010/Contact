import React, { useState } from "react";
import Image from "next/image";
import arrowright from "../../public/images/arrow_right.png";
import close from "../../public/images/close.png";
import ModalDelete from "./ModalDelete";

interface Sort {
  onCloseOption: () => void;
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
      <Image
        className="float-right"
        onClick={() => {
          props.onCloseOption();
        }}
        src={close}
        alt="Landscape picture"
        width={20}
        height={20}
      />
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
          <div className="flex flex-col mt-3">
            <button
              onClick={() => {
                props.sortUp();
              }}
              className="font-bold hover:bg-gray-200"
            >
              A-Z
            </button>
            <button
              onClick={() => {
                props.sortReserver();
              }}
              className="font-bold hover:bg-gray-200"
            >
              Z-A
            </button>
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
        {openDel && (
          <ModalDelete
            title="Delete everything?"
            text="Are you sure you want to remove everything"
            onClose={() => {
              setOpenDel(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default ModalOption;
