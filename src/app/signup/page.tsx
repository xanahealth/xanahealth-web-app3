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

const Page = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-2 bg-gray-50">
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
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  required
                  className="placeholder:text-gray-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="doe"
                  required
                  className="placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                required
                className="placeholder:text-gray-400"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Phone Number</Label>
              <Input
                id="phone"
                type="text"
                placeholder="+250 788 788 788"
                className="placeholder:text-gray-400"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="*****"
                className="placeholder:text-gray-400"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                id="cpassword"
                type="password"
                placeholder="*****"
                className="placeholder:text-gray-400"
              />
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
