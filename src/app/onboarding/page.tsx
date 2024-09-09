"use client";
import Link from "next/link";
import CardPrimary from "@/Appcomponents/card";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-4">
      <Link href="/">
        <p className="font-medium text-2xl text-black mb-2">
          Xana<span className="text-green-900 font-bold">Health</span>
        </p>
      </Link>
      <div className="w-full md:w-[650px] lg:w-[850px] flex flex-col md:flex-row gap-4 mt-4 lg:mt-8">
        <CardPrimary
          title="Onboard Health Facility"
          image="/images/health.png"
          description="Register and configure a new health facility in the system. ensuring
            all necessary details are accurately captured for seamless operation"
          onClick={() => router.push("/onboarding/health-facility")}
        />
        <CardPrimary
          title="Onboard Insurance Company"
          image="/images/insurancesign.png"
          description="Register and configure a new insurance company in the system. ensuring
            all necessary details are accurately captured for seamless operation"
          onClick={() => router.push("/onboarding/insurance")}
        />
      </div>
    </div>
  );
};
export default Page;
