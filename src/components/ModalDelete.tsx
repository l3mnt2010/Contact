import React from "react";
interface About {
  title: string;
  text: string;
  // onOpen: () => void;
  onClose: () => void;
}

const ModalDelete: React.FC<About> = (props) => {
  const { title, text, onClose } = props;

  return (
    <div className="w-full bg-white border shadow-lg p-4">
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="mt-5">{text}?</p>
      </div>
      <div className="mt-5 ml-48">
        <button onClick={() => onClose()} className="font-bold text-black">
          No
        </button>
        <button className="text-red-500 font-bold ml-5">Yes</button>
      </div>
    </div>
  );
};

export default ModalDelete;
