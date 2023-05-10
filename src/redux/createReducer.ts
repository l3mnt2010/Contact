import { createReducer } from "@reduxjs/toolkit";
import { showContact } from "./action";
interface UserState {
  name: string;
  surname: string;
  phonenumber: string;
}
const initialState: UserState = {
  name: "",
  surname: "",
  phonenumber: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(showContact, (state, action) => {
    console.log(action.payload);
    return { ...action.payload };
  });
});
export default userReducer;
