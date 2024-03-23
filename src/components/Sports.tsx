import React from "react";
import { sports } from "@/contant";
import SportCard from "./SportCard";
import { SportCardType } from "@/types.dt";
const Sports = () => {
  return (
    <div>
      <span className=" text-2xl font-semibold pb-1 border-b-2 border-[#738FFF] font-popps ml-2">
        Sports
      </span>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex gap-5 mt-5 justify-between overflow-x-scroll py-4 w-full">
          {sports.map((sport: SportCardType) => {
            return <SportCard sport={sport} key={sport.id} />;
          })}
        </div>
        <div>
          <button className=" bg-brandBlue px-4 rounded-sm py-2 font-inter ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sports;
