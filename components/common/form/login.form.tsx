"use client";
import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import { register } from "module";
import * as yup from 'yup'
import {yupResolver } from "@hookform/resolvers/yup";


//* login Schema
const loginSchema = yup.object({
  email: yup.string().email('invalid email format').required('email is required'),
  password: yup.string().required('password is required')
})

const LoginForm = () => {
  const { register, handleSubmit , formState: {errors} } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("Login form submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
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

      {/* login button */}
      <div className="mt-3">
        <Button label={"Login"} type={"submit"} />
      </div>
    </form>
  );
};

export default LoginForm;
