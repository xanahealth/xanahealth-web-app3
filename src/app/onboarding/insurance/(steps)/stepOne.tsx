"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { FormEvent } from "react";

export const StepOne = ({ formData, setFormData, nextStep }: any) => {
  const [validationErrors, setValidationErrors] = useState<any>({});
  const phoneRegx =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, type: value });
    setValidationErrors((prevState: any) => ({
      ...prevState,
      type: "",
    }));
  };
  const handleStepOneSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const facilityName = form.elements.namedItem(
      "insurance name"
    ) as HTMLInputElement;
    const facilityEmail = form.elements.namedItem(
      "insurance email"
    ) as HTMLInputElement;
    const facilityPhone = form.elements.namedItem(
      "Phone number"
    ) as HTMLInputElement;
    if (facilityName.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilityName.id]: "Insurance name is required",
      }));
    } else if (facilityEmail.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilityEmail.id]: "Insurance email is required",
      }));
    } else if (
      facilityPhone.value === "" ||
      !phoneRegx.test(facilityPhone.value)
    ) {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilityPhone.id]: "Insurance phone is required",
      }));
    } else {
      nextStep();
    }
  };
  return (
    <div className="min-h-[100vh] flex justify-center items-center flex-col gap-2 bg-gray-50">
      <Link href="/">
        <p className="font-medium text-2xl text-black mb-6">
          Xana<span className="text-green-900 font-bold">Health</span>
        </p>
      </Link>
      <Card className="mx-auto max-w-[800px] min-w-[350px] md:min-w-[650px] p-8">
        <Progress value={30} color="green" className="mb-6 h-2" />
        <div className="mb-10">
          <h2 className="font-semibold text-xl">Insurance campany Details</h2>
          <p className="opacity-[80%]">
            Please provide accurate details for your Insurance campany
            <br />
            <span className="text-sm">
              All fields with (<span className="text-red-500 text-base">*</span>
              ) are mandatory
            </span>
          </p>
        </div>
        <form onSubmit={handleStepOneSubmit}>
          <div className="grid grid-flow-row gap-4 mb-6">
            <div className="grid gap-2">
              <Label htmlFor="name">
                Insurance campany Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter insurance name"
                id="name"
                name="insurance name"
                className={
                  validationErrors?.name
                    ? "text-red-500 border border-red-500"
                    : "placeholder:text-gray-400"
                }
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setValidationErrors((prevState: any) => ({
                    ...prevState,
                    name: "",
                  }));
                }}
              />
              <span
                className={
                  validationErrors?.name ? "text-xs text-red-500" : "hidden"
                }
              >
                {validationErrors?.name}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter insurance campany's email"
                value={formData?.email}
                className={
                  validationErrors?.email
                    ? "text-red-500 border border-red-500"
                    : "placeholder:text-gray-400"
                }
                name="insurance email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setValidationErrors((prevState: any) => ({
                    ...prevState,
                    email: "",
                  }));
                }}
              />
              <span
                className={
                  validationErrors?.email ? "text-xs text-red-500" : "hidden"
                }
              >
                {validationErrors?.email}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">
                Phone Number<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter insurance campany's phone number"
                value={formData?.phone}
                id="phone"
                name="Phone number"
                className={
                  validationErrors?.phone
                    ? "text-red-500 border border-red-500"
                    : "placeholder:text-gray-400"
                }
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  setValidationErrors((prevState: any) => ({
                    ...prevState,
                    phone: "",
                  }));
                }}
              />
              <span
                className={
                  validationErrors?.phone ? "text-xs text-red-500" : "hidden"
                }
              >
                {validationErrors?.phone}
              </span>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button
              type="submit"
              className="bg-green-900 text-white hover:bg-green-950"
            >
              Next
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
