import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import arrowback from "../../public/images/arrow_back.png";
import check from "../../public/images/check.png";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";

const AddContact = () => {
  const router = useRouter();

  const [formData, setFormData] = useLocalStorage("contact", {});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data: object) => {
    setFormData(data);
  };

  return (
    <div className="w-full fixed top-0 ">
      <div className="w-full h-auto shadow-lg flex flex-col">
        <div className="w-full flex mt-3">
          <Image
            onClick={() => {
              router.push("/");
            }}
            className="flex items-center ml-4"
            src={arrowback}
            alt="Landscape picture"
            width={30}
            height={30}
          />
          <h1 className="font-bold text-lg flex items-center ml-5">Add</h1>
        </div>
        <Image
          className="ml-80"
          src={check}
          alt="Landscape picture"
          width={25}
          height={25}
        />
      </div>
      <form
        className="w-5/6 mx-auto pt-20 flex flex-col gap-10"
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            className="bg-gray-100 w-full h-11 pl-2 border border-gray-400 rounded-md"
            type="text"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
            placeholder="Enter name"
          />
          {errors.Name && <p className="error">Name is required.</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label>Surname</label>
          <input
            className="bg-gray-100 w-full h-11 pl-2 border border-gray-400 rounded-md"
            type="text"
            {...register("surname", {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
            placeholder="Enter surname"
          />
          {errors.Surname && <p className="error">Surname is required.</p>}
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <label>Phone number</label>
          <input
            className="bg-gray-100 w-full h-11 pl-2 border border-gray-400 rounded-md"
            type="tel"
            {...register("phonenumber", {
              required: true,
              minLength: 10,
              maxLength: 11,
            })}
            placeholder="+998 _ _ _ _ _ _ _ _"
          />
          {errors.Phonenumber && (
            <p className="error">Phone number is required.</p>
          )}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddContact;
