import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Page = () => {
  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center h-[100vh] px-2 flex-col">
        <Link href="/">
          <p className="font-medium text-2xl text-black mb-2">
            Xana<span className="text-green-900 font-bold">Health</span>
          </p>
        </Link>
        <div className="mx-auto grid w-[350px] gap-6 mt-4 lg:mt-8">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl font-bold text-green-800">
              Forgot Password?
            </h1>
            <p className="text-balance  text-gray-600">
              We will send reset instructions to your email
            </p>
          </div>
          <div className="grid gap-4 text-gray-600">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
                className="placeholder:text-gray-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900"
            >
              Reset Password
            </Button>
          </div>
          <div className="mt-4 text-right text-sm text-gray-600">
            <Link href="/login" className="underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block max-h-[100vh]">
        <Image
          src="/images/loginPic.png"
          alt="Image"
          width={500}
          height={100}
          className="w-full h-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
export default Page;
