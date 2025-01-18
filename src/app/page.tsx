
import React from 'react'
import Main from "@/components/main";
import { CarouselSize } from "@/components/Best";
import Featured from "@/components/featured";
import GearUp from '@/components/gearup';
import DontMiss from '@/components/dontMiss';
import Essential from '@/components/essential';
import Navigation from '@/components/navigation';
import Hellobar from '@/components/hellobar';

export default function Home() {
  return (
    <div>
      <Hellobar />
      <Main/>
      <CarouselSize/>
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <Essential/>
      <Navigation/>
    </div>
  )
}
 


