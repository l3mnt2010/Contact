import Navigate from "@/components/Navigate";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import OnlyUser from "@/components/OnlyUser";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import back from "../../../public/images/arrow_back_ios.png";
interface Contact {
  name: string;
  phone: string;
}

const ShowOnlyContact: React.FC<Contact> = () => {
  const user = useSelector((state: RootState) => state.contact);
  const router = useRouter();

  return (
    <div className="w-full mt-5">
      <Image
        className="ml-4 mr-2"
        onClick={() => {
          router.push("/");
        }}
        src={back}
        alt="back"
        width={25}
        height={25}
      />
      <OnlyUser name={user.name} phonenumber={user.phonenumber} />;
    </div>
  );
};

export default ShowOnlyContact;
