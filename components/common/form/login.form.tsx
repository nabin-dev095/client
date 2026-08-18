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
import { useMutation } from "@tanstack/react-query";

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

  // react query mutation
  const { isPending, mutate } = useMutation({
    mutationFn: Login,
    onSuccess: (Response) => {
      console.log("on login success", Response);
    },
    onError: (error) => {
      console.log("on login error", error);
    },
  });

  const onSubmit = async (data: TLogin) => {
    mutate(data);
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
