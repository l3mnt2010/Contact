import React from "react";
import Image from "next/image";
import Delete from "../../public/images/delete.png";
import Edit from "../../public/images/edit.png";
import Vectors from "../../public/images/Vectors.png";
import group22 from "../../public/images/Group 22.png";
import group23 from "../../public/images/Group 23.png";

interface Contact {
  image?: string;
  name: string;
  phonenumber: number;
}

const OnlyUser: React.FC<Contact> = (props) => {
  const { name, phonenumber } = props;
  return (
    <div className="w-full mt-20">
      <div>
        <Image
          className="mx-auto"
          src={Vectors}
          alt="Landscape picture"
          width={60}
          height={60}
        />
        <div className="flex gap-2 fixed right-5">
          <Image src={Delete} alt="Landscape picture" width={30} height={30} />
          <Image src={Edit} alt="Landscape picture" width={30} height={30} />
        </div>
      </div>
      <div className="w-full text-center font-bold mx-auto text-2xl mt-5">
        {name}
      </div>
      <div className="grid grid-cols-2 my-5">
        <p className="ml-5 font-bold flex items-center">{phonenumber}</p>
        <div className="flex gap-5 ml-20">
          <Image src={group22} alt="Landscape picture" width={35} height={35} />
          <Image src={group23} alt="Landscape picture" width={35} height={35} />
        </div>
      </div>
    </div>
  );
};

export default OnlyUser;
