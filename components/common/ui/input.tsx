import path from "path";
import React from "react";
import { Field, FieldValue, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IProps<T extends FieldValues> {
  label: string;
  id: string;
  name: Path<T>;
  placeholder?: string;
  type?: "text" | "email" | "password";
  register: UseFormRegister<T>;
  error?: string;
}

const Input = <T extends FieldValues> ({
  id,
  label,
  name,
  placeholder = "start typing..",
  type = "text",
  register,
  error,
}: IProps<T>) => {
  return (
    <div className="flex flex-col gap-1 tracking-wider">
      <label className="text-teal-600 font-semibold" htmlFor="{id}">
        {id}{" "}
      </label>
      <input
        {...register(name)}
        id={id}
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 text-gray-600 py-2.5 px-1.5 rounded-md text-base focus:outline-teal-600 focus:border-teal-600"
      />
      <small className="text-red-500 h-2 ">{error} </small>
    </div>
  );
};

export default Input;
