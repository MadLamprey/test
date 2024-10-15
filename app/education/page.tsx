"use client";

import { SliderThumb } from "@radix-ui/react-slider";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipArrow } from "@radix-ui/react-tooltip";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { Slider } from "@/components/ui/slider"
import { useState } from "react";
import { Book, Computer, Info } from "lucide-react";
import Link from "next/link";
import "./education.css";


export default function Page() {
  const [sliderValue, setSliderValue] = useState([2022]);
  const [isFlippedSchool, setIsFlippedSchool] = useState(false);
  const [isFlippedUni, setIsFlippedUni] = useState(false);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto gap-20">
      <Navigation />
      <div className="text-zinc-200 text-5xl animate-title my-10">Education</div>
      {sliderValue[0] < 2022 ? (
        <Link href="" className="animate-fade-in" onClick={() => setIsFlippedSchool(!isFlippedSchool)}>
          {isFlippedSchool ? (
            <Card>
          <div className="flex flex-col items-center p-10 w-full hover:bg-zinc-800">
            <span className="relative flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900">
              <Book size={15} />
            </span>{" "}
            <div className="flex flex-col items-center my-5">
              <span className="lg:text-lg font-medium xl:text-xl text-zinc-200 font-display">
                Details
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400 ">
                <p>Subjects Taken</p>
                Physics, Chemistry, Mathematics, Computer Science
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400 ">
                <p>Other Activities</p>
                <p>Founder and President of Computer Science Club</p>
                <p>Academic Affairs Head of Student Council</p>
              </span>
            </div>
          </div>
            </Card>
          ): (
            <Card>
          <div className="flex flex-col items-center p-10 w-full hover:bg-zinc-800">
            <span className="relative flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900">
            <Book size={20} />
            </span>{" "}
            <div className="flex flex-col items-center my-10">
              <span className="lg:text-xl font-medium xl:text-3xl text-zinc-200 font-display">
                Scottish High International School
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400 ">
                Indian School Certificate
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400 ">
                2007 - 2022
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400 ">
                Grade: 99.2% [All India Rank 2]
              </span>
            </div>
          </div>
        </Card>
          )}
        </Link>
      ) : (
        <Link href="" className="animate-fade-in" onClick={() => setIsFlippedUni(!isFlippedUni)}>
        {isFlippedUni ? (
          <Card>
            <div className="flex flex-col items-center p-10 w-full hover:bg-zinc-800 max-w-prose">
              <span className="relative flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900">
                <Computer size={15} />
              </span>{" "}
              <div className="flex flex-col items-center my-5">
                <span className="lg:text-lg font-medium xl:text-xl text-zinc-200 font-display">
                  Details
                </span>
                <span className="mt-4 text-sm text-center text-zinc-400 ">
                  <p>Coursework</p>
                  Programming Methodology I/II, Discrete Structures, Data Structures and Algorithms, Computer Organization, Software Engineering, Operating Systems, Database Systems, Linear Algebra, Calculus, Foundations of AI/ML, Big Data Systems, Value Creation in Innovation
                </span>
                <span className="mt-4 text-sm text-center text-zinc-400 ">
                  <p>Focus Areas</p>
                  AI/ML, Database Systems, Software Engineering
                </span>
                <span className="mt-4 text-sm text-center text-zinc-400 ">
                  <p>Other Activities</p>
                  <p>Software Engineer at Google Developer Student Club (GDSC NUS)</p>
                  <p>NUS Pickleball Exco</p>
                </span>
              </div>
            </div>
          </Card>
        ): (
          <Card>
          <div className="flex flex-col items-center p-10 w-full hover:bg-zinc-800">
            <span className="relative flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900">
            <Computer size={20} />
            </span>{" "}
            <div className="flex flex-col items-center my-10">
              <span className="lg:text-xl font-medium xl:text-3xl text-zinc-200 font-display">
                National University of Singapore
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400">
                Bachelor of Computing
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400">
                2022 - 2026 [Expected]
              </span>
              <span className="mt-4 text-sm text-center text-zinc-400">
                GPA: 4.6 / 5.0
              </span>
            </div>
          </div>
        </Card>
        )}
        </Link>
      )}
      <div className="flex flex-col items-center justify-center w-full animate-fade-in">
      <Slider min={2007} max={2024} step={1} value={sliderValue} onValueChange={handleSliderChange} className="border w-1/6 p-0 m-0">
      <SliderThumb className="bg-zinc-800"></SliderThumb></Slider>
      <div className="flex flex-row justify-center items-center gap-2">
      <p className="text-white my-5">{sliderValue}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info size={15} className="text-white"/>
          </TooltipTrigger>
          <TooltipContent sideOffset={5} className="border text-zinc-300 p-5 rounded-lg text-xs" side="bottom">
            <TooltipArrow className="bg-zinc-800" />
            <p>Drag the slider to view my educational journey</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </div>
      </div>
    </div>
  );
}
