
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

export const StepOne = ({ formData, setFormData, nextStep }: any) => {
  const handleSelectChange = (value:string) => {
    setFormData({ ...formData, type: value });
  };
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-2 bg-gray-50">
      <Link href="/">
        <p className="font-medium text-2xl text-black mb-6">
          Xana<span className="text-green-900 font-bold">Health</span>
        </p>
      </Link>
      <Card className="mx-auto max-w-[800px] min-w-[350px] md:min-w-[650px] p-8">
        <Progress value={30} color="green" className="mb-6 h-2" />
        <div className="mb-10">
          <h2 className="font-semibold text-xl">Health Facility Details</h2>
          <p className="opacity-[80%]">
            Please provide accurate details for your health facility
          </p>
        </div>
        <div className="grid grid-flow-row gap-4 mb-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Health Facility Name</Label>
            <Input
              type="text"
              placeholder="Enter facility name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <Select onValueChange={handleSelectChange}>
              <Label htmlFor="type" className="mb-2">
                Health Facility type
              </Label>
              <SelectTrigger className="w-full placeholder:text-gray-300" >
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent
              >
                <SelectItem value="General Clinic">General Clinic</SelectItem>
                <SelectItem value="Polyclinic">Polyclinic</SelectItem>
                <SelectItem value="Hospital">Hospital</SelectItem>
                <SelectItem value="Health Center">Health Center</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              placeholder="Enter facility's email"
              value={formData?.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Phone Number</Label>
            <Input
              type="text"
              placeholder="Enter facility's phone number"
              value={formData?.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            onClick={nextStep}
            className="bg-green-900 text-white hover:bg-green-950"
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export const StepTwo = ({ formData, setFormData, nextStep, prevStep }: any) => {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-2 bg-gray-50">
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
          </p>
        </div>
        <div className="grid grid-flow-row gap-4 mb-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Tax Identification Number</Label>
            <Input
              type="text"
              placeholder="Enter facility's TIN"
              value={formData?.tax_id_number}
              onChange={(e) =>
                setFormData({ ...formData, tax_id_number: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Business Registration Number</Label>
            <Input
              type="text"
              placeholder="Enter your business registration number"
              value={formData?.business_registration_number}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  business_registration_number: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Country</Label>
              <Input
                type="text"
                placeholder="Enter country name"
                value={formData?.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Province/State</Label>
              <Input
                type="text"
                placeholder="Enter province/state"
                value={formData?.province_or_state}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    province_or_state: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">District/Local Government</Label>
              <Input
                type="text"
                placeholder="Enter district"
                value={formData?.district_or_local_government}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    district_or_local_government: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Sector/City</Label>
              <Input
                type="text"
                placeholder="Enter sector/city"
                value={formData?.sector_or_city}
                onChange={(e) =>
                  setFormData({ ...formData, sector_or_city: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <Button
            onClick={prevStep}
            className="bg-green-900 text-white hover:bg-green-950"
          >
            Previous
          </Button>
          <Button
            onClick={nextStep}
            className="bg-green-900 text-white hover:bg-green-950"
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};
