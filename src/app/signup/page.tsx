"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, FormEvent, useState } from "react";

const Page = () => {
  const [userData, setUserData] = useState({});
  const [validationErrors, setValidationErrors] = useState<any>({});
  const phoneRegx =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData((prevdata: any) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
    setValidationErrors((prevState: any) => ({
      ...prevState,
      [e.target.name]: "",
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const firstName = form.elements.namedItem("first-name") as HTMLInputElement;
    const lastName = form.elements.namedItem("first-name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const cpassword = form.elements.namedItem("cpassword") as HTMLInputElement;
    if (firstName.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [firstName.id]: "First name is required",
      }));
    } else if (email.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [email.id]: "Email is required",
      }));
    } else if (phone.value === "" || !phoneRegx.test(phone.value)) {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [phone.id]: "Phone is required",
      }));
    } else if (password.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [password.id]: "Password is required",
      }));
    } else if (cpassword.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [cpassword.id]: "Confirm Password is required",
      }));
    }
    else if (cpassword.value !==password.value) {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [cpassword.id]: "Password confirmation and actual password must match",
      }));
    }
     else {
      console.log("values",userData);
    }
  };
  return (
    <div className="min-h-[100vh] flex justify-center items-center flex-col gap-2 bg-gray-50">
      <Link href="/">
        <p className="font-medium text-2xl text-black mt-4 lg:mt-8 mb-2">
          Xana<span className="text-green-900 font-bold">Health</span>
        </p>
      </Link>
      <Card className="mx-auto max-w-[800px]">
        <CardHeader>
          <CardTitle className="text-xl text-green-800 text-center">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center">
            Enter your information to create an account
            <br />
            <span className="text-sm">
              All fields with (<span className="text-red-500 text-base">*</span>
              ) are mandatory
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">
                    First name<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    placeholder="John"
                    onChange={handleChanges}
                    className={
                      validationErrors["first-name"]
                        ? "text-red-500 border border-red-500"
                        : "placeholder:text-gray-400"
                    }
                  />
                  <span
                    className={
                      validationErrors["first-name"]
                        ? "text-xs text-red-500"
                        : "hidden"
                    }
                  >
                    {validationErrors["first-name"]}
                  </span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">
                    Last name
                  </Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    placeholder="doe"
                    onChange={handleChanges}
                    className={
                      validationErrors["last-name"]
                        ? "text-red-500 border border-red-500"
                        : "placeholder:text-gray-400"
                    }
                  />
                  <span
                    className={
                      validationErrors["last-name"]
                        ? "text-xs text-red-500"
                        : "hidden"
                    }
                  >
                    {validationErrors["last-name"]}
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  onChange={handleChanges}
                  className={
                    validationErrors?.email
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors["email"]
                      ? "text-xs text-red-500"
                      : "hidden"
                  }
                >
                  {validationErrors["email"]}
                </span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">
                  Phone Number<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={handleChanges}
                  placeholder="+250 788 788 788"
                  className={
                    validationErrors?.phone
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors["phone"]
                      ? "text-xs text-red-500"
                      : "hidden"
                  }
                >
                  {validationErrors["phone"]}
                </span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">
                  Password<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChanges}
                  placeholder="*****"
                  className={
                    validationErrors?.password
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors["password"]
                      ? "text-xs text-red-500"
                      : "hidden"
                  }
                >
                  {validationErrors["password"]}
                </span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cpassword">
                  Confirm Password<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  onChange={handleChanges}
                  placeholder="*****"
                  className={
                    validationErrors?.cpassword
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors["cpassword"]
                      ? "text-xs text-red-500"
                      : "hidden"
                  }
                >
                  {validationErrors["cpassword"]}
                </span>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-900 text-white hover:bg-green-900"
              >
                Create an account
              </Button>
              <Button
                variant="outline"
                className="w-full bg-gray-100  text-green-9 00"
              >
                Login with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
