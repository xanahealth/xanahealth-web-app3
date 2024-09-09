import { CheckIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface props {
  title: string;
  image: string;
  description: string;
  onClick:()=>void;
}
const CardPrimary = ({ title, image, description,onClick }: props) => {
  return (
    <Card className="border border-gray-300 rounded">
      <CardHeader>
        <CardTitle className="text-center opacity-[80%]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4 h-[300px] w-[400px]">
          <Image
            src={image}
            alt="Image"
            width={400}
            height={100}
            className="w-full h-full object-fit dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
      <CardDescription className="text-center w-[450px] mb-4 px-4">
        {description}
      </CardDescription>
      <CardFooter>
        <Button className="w-full  bg-green-900 text-white hover:bg-green-950 mt-4" onClick={onClick}>
          <CheckIcon className="mr-2 h-4 w-4" /> Continue
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CardPrimary;
