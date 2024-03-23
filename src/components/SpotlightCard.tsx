import { SpotlightType } from "@/types.dt";
import Image from "next/image";
import React from "react";
import { CardSVG } from "../../public/svg/card";
const SpotlightCard = ({ spotlight }: { spotlight: SpotlightType }) => {
  return (
    <div
      className=" min-w-64  w-[280px]  p-3 flex flex-col gap-2 h-[40rem] relative   overflow-hidden
      font-inter"
    >
      <CardSVG className="absolute inset-0  " />
      <div className="z-50">
        <div className="h-[29rem] w-[18rem]   relative md:-left-[20px] -left-[27px] -top-2">
          <Image src={spotlight.img} alt={spotlight.heading} fill />
        </div>
        <div className=" -mt-2 flex items-center flex-col font-popps gap-2 px-2">
          <p className="  font-medium">{spotlight.heading}</p>
          <p className="text-xs">{spotlight.timestamp}</p>
          <p className="text-xs text-center px-2 dark:text-gray-200 text-[#818A97]">
            {spotlight.location}
          </p>
          <button className="text-sm bg-black text-white w-full py-2 mt-2">
            {spotlight.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
