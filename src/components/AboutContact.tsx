import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState, AppDispatch } from "../redux/store";
import ShowOnlyContact from "../pages/contact/showonlycontact";
import Vectors from "../../public/images/Vectors.png";
import phone from "../../public/images/call.png";
import { useRouter } from "next/router";
import { showContact } from "@/redux/action";

interface Contact {
  image?: string;
  name: string;
  surname: string;
  phonenumber: string;
}
const AboutContact: React.FC<Contact> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { name, phonenumber, surname } = props;
  // const [showContacts, setShowContacts] = useState({
  //   name: "",
  //   surname: "",
  //   phonenumber: "",
  // });

  return (
    <div className="w-full">
      <div className="w-full mt-5 hover:bg-gray-200 border border-b">
        <div className="w-5/6 mx-auto flex gap-6">
          <div className="flex items-center">
            <Image
              src={Vectors}
              alt="Landscape picture"
              width={40}
              height={40}
            />
          </div>
          <div
            onClick={() => {
              dispatch(showContact(props));
              router.push("/contact/showonlycontact");
            }}
            className="mr-5"
          >
            <h1 className="font-bold">
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
    </div>
  );
};

export default AboutContact;
