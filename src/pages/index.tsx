import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navigate from "@/components/Navigate";
import Group from "@/components/Group";
import ButtonAdd from "@/components/ButtonAdd";
import AboutContact from "@/components/AboutContact";
import Searchs from "@/components/Search";
import { data } from "autoprefixer";
interface Item {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [contact, getContact] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let data = res.data;
        data = data.filter((item: Item) => item.name.length <= 16);
        getContact(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const sortContact = () => {
    let a = contact.sort(function (a: Item, b: Item) {
      return a.name === b.name ? 0 : a.name > b.name ? 1 : -1;
    });
    getContact(a);
  };
  const sortContactReserve = () => {
    let a = contact.sort(function (a: Item, b: Item) {
      return a.name === b.name ? 0 : a.name < b.name ? 1 : -1;
    });
    getContact(a);
  };
  return (
    <div>
      <Navigate
        sortUp={() => {
          sortContact();
        }}
        sortReserver={() => {
          sortContactReserve();
        }}
      />

      {contact.length === 0 && <Group />}

      {contact.map((itm: Item) => {
        return (
          <AboutContact
            name={itm.name}
            phonenumber={itm.phone}
            surname={itm.username}
            key={itm.id}
          />
        );
      })}

      <div className="sticky right-5">
        <ButtonAdd />
      </div>
    </div>
  );
}
