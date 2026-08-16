import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  register: UseFormRegister<any>;
  error?: string;
}

const Input = ({
  id,
  label,
  name,
  placeholder = "start typing..",
  type = "text",
  register,
  error,
}: IProps) => {
  return (
    <div className="flex flex-col gap-1 tracking-wider">
      <label className="text-teal-600 font-semibold" htmlFor="{id}">
        {id}{" "}
      </label>
      <input
        {...register(name)}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 text-gray-600 py-2.5 px-1.5 rounded-md text-base focus:outline-teal-600 focus:border-teal-600"
      />
      <small className="text-red-500 h-2 ">{error} </small>
    </div>
  );
};

export default Input;
