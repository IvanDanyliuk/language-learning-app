"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";
import { OAuthButton } from "./OAuthButton";
import { FormData, UserSchema } from "../types";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormData) => {
    redirect(`/`);
    // redirect(`/onboarding`) TODO: Change the redirect path to on boarding page
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <FormField
        type="text"
        placeholder="Name"
        name="name"
        register={register}
        error={errors.name}
      />
      <FormField
        type="email"
        placeholder="Email"
        name="email"
        register={register}
        error={errors.email}
      />
      <FormField
        type="password"
        placeholder="Password"
        name="password"
        register={register}
        error={errors.password}
      />
      <FormField
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
      />

      <button
        type="submit"
        className="group rounded-full bg-black py-2 px-5 text-white font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
      >
        <span>Sign In</span>
        <ArrowRight
          size={20}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>

      <p className="text-center text-sm text-gray-500 mt-6">or sign up with</p>

      <div className="mt-4 grid gap-4">
        <OAuthButton
          provider="Google"
          onClick={() => alert("Google auth")}
          // onClick={} TODO: implement real oAuth logic
        />

        <OAuthButton
          provider="Facebook"
          onClick={() => alert("Facebook auth")}

          // onClick={} TODO: implement real oAuth logic
        />

        <OAuthButton
          provider="X"
          onClick={() => alert("X auth")}

          // onClick={} TODO: implement real oAuth logic
        />
      </div>

      <p className="text-center mt-6 text-sm text-gray-600">
        Already have an account?
        <Link
          href="/auth/sign-in"
          className="ml-2 text-blue-500 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};
