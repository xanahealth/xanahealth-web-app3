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
            <h1 className="text-2xl font-bold text-green-900">Login</h1>
            <p className="text-balance  text-gray-600">
              Enter your credentials below to login.
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
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="****"
                required
                className="placeholder:text-gray-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900"
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full bg-gray-100  text-green-800"
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
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
