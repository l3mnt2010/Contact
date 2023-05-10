import React, { useEffect, useState } from "react";
import Image from "next/image";
import Vectors from "../../public/images/Vectors.png";
import phone from "../../public/images/call.png";

interface Contact {
  image?: string;
  name: string;
  surname: string;
  phonenumber: string;
}
const AboutContact: React.FC<Contact> = (props) => {
  const { name, phonenumber, surname } = props;
  return (
    <div className="w-full mt-5 hover:bg-gray-200">
      <div className="w-5/6 mx-auto flex gap-6">
        <div className="flex items-center">
          <Image src={Vectors} alt="Landscape picture" width={40} height={40} />
        </div>
        <div className="mr-5">
          <h1>
            {name}
            {surname}
          </h1>
          <p>{phonenumber}</p>
        </div>
        <a href={`tel:${phonenumber}`} className="ml-16 flex items-center">
          <Image src={phone} alt="Landscape picture" width={30} height={30} />
        </a>
      </div>
    </div>
  );
};

export default AboutContact;
