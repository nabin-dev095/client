"use client";
import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import { register } from "module";
import * as yup from 'yup'
import {yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schema/auth.schema";
import { TRgister } from "@/types/auth.types";



const SignUpForm = () => {
  const { register, handleSubmit , formState: {errors} } = useForm<TRgister>({
    defaultValues: {
      email: "",
      password: "",
      conform_password: "",
      full_name: "",
    },
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (data: TRgister) => {
    console.log(" Sign Up form submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit )} className=" flex flex-col gap-4">
      {/* fullname */}
       <Input
        id={"full_name"}
        label={"Full Name"}
        name={"full_name"}
        placeholder={"John Doe"}
        type={"text"}
        register={register}
        error={errors?.email?.message}
      />



      {/* email */}
      <Input
        id={"email"}
        label={"email"}
        name={"email"}
        placeholder={"john@gmail.com"}
        type={"email"}
        register={register}
        error={errors?.email?.message}
      />

      {/* password */}
      <Input
        id={"password"}
        label={"password"}
        name={"password"}
        placeholder={"enter password"}
        type={"password"}
        register={register}
        error={errors?.password?.message}
      />

      {/* Conform Passwrod  */}
       <Input
        id={"confrom_password"}
        label={"Conform Password"}
        name={"confrom_password"}
        placeholder={"retype your password"}
        type={"password"}
        register={register}
        error={errors?.password?.message}
      />

      {/* login button */}
      <div className="mt-3">
        <Button label={"Create Account"} type={"submit"} />
      </div>
    </form>
  );
};

export default SignUpForm;
