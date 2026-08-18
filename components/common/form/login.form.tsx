"use client";
import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import { register } from "module";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/auth.schema";
import { TLogin } from "@/types/auth.types";
import { Login } from "@/api/auth.api";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: TLogin) => {
    try {
      console.log("Login form submitted", data);
      const response = await Login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
