"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../ui/utils/cn";

import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import authService from '../appwrite/auth.js'

export default function SignupFormDemo() {

  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const create = async(data) => {
      setError("")
      try {        
          const userData = await authService.createAccount(data)
          if (userData) {          
              const userData = await authService.getCurrentUser()
              if(userData) dispatch(login(userData));
              navigate("/")
          }
      } catch (error) {
          setError(error.message)
          console.log(error)
      }
  }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Estha
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Estha if you can because we don&apos;t have a login flow
        yet
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form className="my-8" onSubmit={handleSubmit(create)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
            id="firstname"
            placeholder="Saurabh"
            type="text"
            {...register("name", {
              required: true,
            })}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input 
            id="lastname" 
            placeholder="Bhaskar"
            type="text" 
            {...register("lastname", {
              required: true,
            })}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
          id="email"
          placeholder="usermail@email.com"
          type="email"
          {...register("email", {
            required: true,
            validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
          })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
          id="password"
          placeholder="••••••••"
          type="password"
          {...register("password", {
            required: true,})}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Enter password again</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="password"
            {...register("password", {
              required: true,})}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
