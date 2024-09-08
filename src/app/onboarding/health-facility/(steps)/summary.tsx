import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
export const Summary = ({ formData, submitForm, prevStep }: any) => {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-2 bg-gray-50">
      <Link href="/">
        <p className="font-medium text-2xl text-black mb-6">
          Xana<span className="text-green-900 font-bold">Health</span>
        </p>
      </Link>
      <Card className="mx-auto max-w-[800px] min-w-[350px] md:min-w-[650px] p-8">
        <Progress value={100} color="green" className="mb-6 h-2" />
        <div className="mb-10">
          <h2 className="font-semibold text-xl">Summary and Confirmation</h2>
          <p className="opacity-[80%]">
            Please confirm all information before submitting
          </p>
        </div>
        <div className="grid grid-flow-row gap-4 mb-6">
          <table id="summary-table" className="w-full my-5 table text-sm">
            <tbody className="xs:w-full">
              <tr className="bg-gray-100 h-[35px]">
                <td className="font-medium">Health Facility Name</td>
                <td>{formData?.name}</td>
              </tr>
              <tr className="bg-gray-50 h-[35px]">
                <td className="font-medium">Health Facility Type</td>
                <td>{formData?.type}</td>
              </tr>
              <tr className="bg-gray-100 h-[35px]">
                <td className="font-medium">Email</td>
                <td>{formData?.email}</td>
              </tr>
              <tr className="bg-gray-50 h-[35px]">
                <td className="font-medium">Phone Number</td>
                <td>{formData?.phone}</td>
              </tr>
              <tr className="bg-gray-100 h-[35px]">
                <td className="font-medium">Country</td>
                <td>{formData?.country}</td>
              </tr>
              <tr className="bg-gray-50 h-[35px]">
                <td className="font-medium">Province/State</td>
                <td>{formData?.province_or_state}</td>
              </tr>
              <tr className="bg-gray-100 h-[35px]">
                <td className="font-medium">District/Local Government</td>
                <td>{formData?.district_or_local_government}</td>
              </tr>
              <tr className="bg-gray-50 h-[35px]">
                <td className="font-medium">Sector/City</td>
                <td>{formData?.sector_or_city}</td>
              </tr>
              <tr className="bg-gray-100 h-[35px]">
                <td className="font-medium">Tax Identification Number</td>
                <td>{formData?.tax_id_number}</td>
              </tr>
              <tr className="bg-gray-50 h-[35px]">
                <td className="font-medium">Business Registration</td>
                <td>{formData?.business_registration_number}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-between">
          <Button
            onClick={prevStep}
            className="bg-green-900 text-white hover:bg-green-950"
          >
            Previous
          </Button>
          <Button
            onClick={submitForm}
            className="bg-green-900 text-white hover:bg-green-950"
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};
