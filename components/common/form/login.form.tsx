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
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import { all_admins } from "@/types/global.types";

const LoginForm = () => {
const router = useRouter()
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
    onSuccess: (response) => {
      console.log("on login success", response);
      toast.success(response.message?? 'Login Success')
      if(all_admins.includes(response.data.user.role)){
        router.replace('/admin')
      }else {
        router.replace('/')
      }
    },
    onError: (error) => {
      console.log("on login error", error);
      toast.error(error.message?? 'Login failed')
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
