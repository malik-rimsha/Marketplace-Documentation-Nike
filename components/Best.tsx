
"use client"
import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/cards"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"
import { airMax } from "@/utils/data"

export function CarouselSize() {
  return (
    <div className="items-center ml-8 mt-12 "><h1 className="flex font-semibold text-center mb-4 text-lg ">Best of Air Max  </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mb-3"
      >
        <CarouselContent>
          {airMax.map((item) => (

            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 ">
              <Link href={""}>
                <div className="gap-1 items-center ">
                  <Card>
                    <CardContent className=" bg-[#F5F5F5] aspect-square group ">
                      <Image src={item.img} alt={"shoes"} width={420} height={440} />
                    </CardContent>

                  </Card>
                </div>
                <div className=" flex justify-between mx-2 mt-4">
                  <h1 className="font-semibold text-sm text-[#111111]">{item.title}</h1>
                  <h2 className="font-semibold text-sm text-[#111111]">{item.price}</h2>
                </div>
                <h3 className="ml-2 text-xs text-[#757575]">{item.title2}</h3>
              </Link>
            </CarouselItem>
          ))}

        </CarouselContent>
        <div className=" absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
          <h1 className="font-semibold text-xs">shope</h1>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

