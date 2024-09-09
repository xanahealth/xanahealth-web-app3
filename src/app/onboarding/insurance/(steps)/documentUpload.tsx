import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileIcon, Cross2Icon, UploadIcon } from "@radix-ui/react-icons";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Stepper } from "@/Appcomponents/stepper";
export const StepThree = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}: any) => {
  const handleLicenceUpload = () => {
    const licenseEl: HTMLElement | null = document.getElementById(
      "operational_license_document"
    );
    licenseEl?.click();
  };

  const handlelogoUpload = () => {
    const licenseEl: HTMLElement | null = document.getElementById("logo");
    licenseEl?.click();
  };

  const handleDeleteFile = (file: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [file]: null,
    }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] ?? null;
    const fileName: string | any = file?.name.toLowerCase();
    if (
      e.target.name === "operational_license_document" &&
      !(fileName?.endsWith(".pdf") || fileName?.endsWith(".docx"))
    ) {
      ("The supported documents should have .pdf and .doc format");
    } else if (
      (e.target.name === "logo" && !fileName?.endsWith(".png")) ||
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg")
    ) {
      ("The supported images should have .png, .jpeg and .jpg format");
    } else {
      setFormData((prevData: any) => ({
        ...prevData,
        [e.target.name]: file,
      }));
    }
  };
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-2 bg-gray-50">
      <Link href="/">
        <p className="font-medium text-2xl text-black mb-6">
          Xana<span className="text-green-900 font-bold">Health</span>
        </p>
      </Link>
      <Card className="mx-auto max-w-[800px] min-w-[350px] md:min-w-[650px] p-8">
      <Progress value={80} color="green" className="mb-6 h-2"/>
        <div className="mb-10">
          <h2 className="font-semibold text-xl">Upload Documentation</h2>
          <p className="opacity-[80%]">
            Please upload the appropriate documents for your health facility
          </p>
        </div>
        <form className="m-auto flex flex-col gap-5 mt-10 justify-center">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <label className="text-grey-800 font-normal">
                Operational License Document
              </label>
              {formData?.operational_license_document ? (
                <div className="flex gap-3 items-center justify-between bg-gray-100 py-[8px] px-[8px] text-center border border-green-900  opacity-80 rounded-[8px] max-w-fit min-w-fit md:min-w-[400px]">
                  <div className="flex gap-2 w-fit">
                    <FileIcon className="text-6xl" />
                    <p className="truncate text-sm">
                      {formData?.operational_license_document?.name}
                    </p>
                  </div>
                  <button
                    className="text-base"
                    type="button"
                    onClick={() =>
                      handleDeleteFile("operational_license_document")
                    }
                  >
                    X
                  </button>
                </div>
              ) : (
                <div
                  className="flex flex-col text-center items-center justify-center w-full h-[100px] border-2 border-dashed border-grey-500 rounded-lg opacity-80 relative hover:cursor-pointer"
                  onClick={handleLicenceUpload}
                >
                  <input
                    type="file"
                    id="operational_license_document"
                    name="operational_license_document"
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                    accept=".png, .pdf, .doc, .docx"
                  />
                  <div className="absolute flex flex-col gap-3 items-center">
                    <UploadIcon className="hover:cursor-pointer text-2xl" />
                    <p className="font-normal text-sm ">
                      Upload your file here. Supported formats: pdf, .doc
                      <br /> Maximum size 5MB
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-grey-800 font-normal">
                Health Facility logo
              </label>
              {formData?.logo ? (
                <div className="flex gap-3 items-center justify-between bg-gray-100 py-[8px] px-[8px] text-center border border-green-900 rounded-[8px] max-w-fit min-w-fit md:min-w-[400px]">
                  <div className="flex gap-2">
                    <FileIcon />
                    <p className="truncate  text-sm opacity-80">
                      {formData?.logo?.name}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteFile("logo")}
                    type="button"
                  >
                    X
                  </button>
                </div>
              ) : (
                <div
                  className="flex flex-col text-center items-center justify-center w-full h-[100px] border-2 border-dashed border-grey-500 rounded-lg relative hover:cursor-pointer"
                  onClick={handlelogoUpload}
                >
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                    accept="image/*"
                  />
                  <div className="absolute flex flex-col gap-3 items-center">
                    <UploadIcon className="hover:cursor-pointer text-2xl" />
                    <p className="font-normal text-sm opacity-80">
                      Upload your file here. Supported formats: png, .jpg
                      <br /> Maximum size 5MB
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
        <div className="w-full flex justify-between mt-6">
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
