"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { FormEvent } from "react";

export const StepTwo = ({ formData, setFormData, nextStep, prevStep }: any) => {
  const [validationErrors, setValidationErrors] = useState<any>({});
  const handleStepOneSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const facilityTin = form.elements.namedItem("tin") as HTMLInputElement;
    const facilityCountry = form.elements.namedItem(
      "country"
    ) as HTMLInputElement;
    const facilityProvince = form.elements.namedItem(
      "province"
    ) as HTMLInputElement;
    const facilityDistrict = form.elements.namedItem(
      "district"
    ) as HTMLInputElement;
    const facilitySector = form.elements.namedItem(
      "sector"
    ) as HTMLInputElement;
    if (facilityTin.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilityTin.id]: "Facility TIN is required",
      }));
    } else if (facilityCountry.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilityCountry.id]: "Country is required",
      }));
    } else if (facilityProvince.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilityProvince.id]: "Province is required",
      }));
    } else if (facilityDistrict.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilityDistrict.id]: "District is required",
      }));
    } else if (facilitySector.value === "") {
      setValidationErrors((prevState: any) => ({
        ...prevState,
        [facilitySector.id]: "Sector/state is required",
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
        <Progress value={60} color="green" className="mb-6 h-2" />
        <div className="mb-10">
          <h2 className="font-semibold text-xl">Health Facility Details</h2>
          <p className="opacity-[80%]">
            Please provide accurate details for your health facility
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
              <Label htmlFor="email">
                Tax Identification Number<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="tin"
                placeholder="Enter facility's TIN"
                name="tin"
                value={formData?.tax_id_number}
                className={
                  validationErrors?.tin
                    ? "text-red-500 border border-red-500"
                    : "placeholder:text-gray-400"
                }
                onChange={(e) => {
                  setFormData({ ...formData, tax_id_number: e.target.value });
                  setValidationErrors((prevState: any) => ({
                    ...prevState,
                    tin: "",
                  }));
                }}
              />
              <span
                className={
                  validationErrors?.tin ? "text-xs text-red-500" : "hidden"
                }
              >
                {validationErrors?.tin}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Business Registration Number</Label>
              <Input
                type="text"
                placeholder="Enter your business registration number"
                value={formData?.business_registration_number}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    business_registration_number: e.target.value,
                  });
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Country<span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter country name"
                  value={formData?.country}
                  onChange={(e) => {
                    setFormData({ ...formData, country: e.target.value });
                    setValidationErrors((prevState: any) => ({
                      ...prevState,
                      country: "",
                    }));
                  }}
                  className={
                    validationErrors?.country
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors?.country
                      ? "text-xs text-red-500"
                      : "hidden"
                  }
                >
                  {validationErrors?.country}
                </span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Province/State<span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  placeholder="Enter province/state"
                  id="province"
                  name="province"
                  value={formData?.province_or_state}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      province_or_state: e.target.value,
                    });
                    setValidationErrors((prevState: any) => ({
                      ...prevState,
                      province: "",
                    }));
                  }}
                  className={
                    validationErrors?.province
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors?.province
                      ? "text-xs text-red-500"
                      : "hidden"
                  }
                >
                  {validationErrors?.province}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">
                  District/Local Government
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  placeholder="Enter district"
                  id="district"
                  name="district"
                  value={formData?.district_or_local_government}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      district_or_local_government: e.target.value,
                    });
                    setValidationErrors((prevState: any) => ({
                      ...prevState,
                      distrcit: "",
                    }));
                  }}
                  className={
                    validationErrors?.district
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors?.district
                      ? "text-xs text-red-500"
                      : "hidden"
                  }
                >
                  {validationErrors?.district}
                </span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Sector/City<span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  placeholder="Enter sector/city"
                  id="sector"
                  name="sector"
                  value={formData?.sector_or_city}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      sector_or_city: e.target.value,
                    });
                    setValidationErrors((prevState: any) => ({
                      ...prevState,
                      sector: "",
                    }));
                  }}
                  className={
                    validationErrors?.sector
                      ? "text-red-500 border border-red-500"
                      : "placeholder:text-gray-400"
                  }
                />
                <span
                  className={
                    validationErrors?.sector ? "text-xs text-red-500" : "hidden"
                  }
                >
                  {validationErrors?.sector}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              className="bg-green-900 text-white hover:bg-green-950"
            >
              Previous
            </Button>
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
