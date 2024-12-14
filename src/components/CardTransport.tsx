import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function Cardtransport() {
  return (
    <Card>
      <CardHeader>
        <div className="relative w-full h-52 mb-4">
          <Image
            src="/van.webp"
            alt="Camionnette"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <CardTitle>Cat 04 Camionnette 4m3</CardTitle>
        <CardDescription>
          <ul className="flex justify-between   my-3">
            <li>Manuella</li>
            <li>4 portes</li>
            <li>2 pers</li>
          </ul>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" mx-20 text-center font-bold items-center justify-between  ">
          <div className="">
            <p>A partir</p>
            <p className="font-bold text-3xl">
              63.65€ <span className="font-normal text-xl">TTC/j</span>
            </p>
          </div>

          <p className="text-blue-500 hover:underline cursor-pointer">
            EN SAVOIR +
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Réserver</Button>
      </CardFooter>
    </Card>
  );
}
