import { createAction } from "@reduxjs/toolkit";
interface Contact {
  image?: string;
  name: string;
  surname: string;
  phonenumber: string;
}

export const showContact = createAction<Contact>("showContact");
