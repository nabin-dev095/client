'use client'
import React from 'react'
import Input from '../ui/input'
import Button from '../ui/button'
import { useForm } from 'react-hook-form'
import { register } from 'module'


  const LoginForm = () =>{
    const { register , handleSubmit } = useForm({
      defaultValues: {
        email: '',
        password: ''
      }

    })

    const onSubmit = (data: {email: string, password: string}) => {
      console.log("Login form submitted", data);
      

    }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-4'>
         {/* email */}
         <Input
         id={'email'}
         label={'email'}
         name={'email'}
         placeholder={'john@gmail.com'}
         type={'email'}
         register={register}
         
         />

         {/* password */}
         <Input 
         id={'password'}
         label={'password'}
         name={'password'}
         placeholder={'enter password'}
         type={'password'}
         register={register}
         
         />

         {/* login button */}
         <div className='mt-3'>
         <Button 
         label={'Login'}
         type={'submit'}
         />
         </div>
        
    </form>
  )
}

export default LoginForm