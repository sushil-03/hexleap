import React from "react";
import { SportCardType } from "@/types.dt";
import Image from "next/image";

const SportCard = ({ sport }: { sport: SportCardType }) => {
  return (
    <div
      className=" min-w-64 w-64 dark:bg-darkContainer bg-lightContainer p-3 flex flex-col gap-2
     dark:shadow-[0_4px_8px_0px_rgba(0,0,0,0.4)] shadow-[0_8px_16px_0px_rgba(0,0,0,0.05)] font-inter ml-2"
    >
      <div className={` relative  ${sport.isAdd ? "h-64" : "h-96"}`}>
        <Image src={sport.img} alt={sport.heading} fill />
        {sport.isAdd && (
          <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs">
            Ad
          </div>
        )}
      </div>
      {!sport.isAdd ? (
        <div className="flex gap-2 flex-col">
          <h1 className="">{sport.heading}</h1>
          <div className="dark:bg-darkBackground bg-lightBackground flex justify-between px-3 py-2">
            <div className="flex flex-col gap-1">
              <p className="text-xs  dark:text-gray-200  text-gray-600">
                Total Events
              </p>
              <p className="text-sm">{sport.totalEvent}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs dark:text-gray-200 text-gray-600">Sport</p>
              <p className="text-sm">{sport.sports}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" px-3 flex gap-2 flex-col">
          <h1 className="">{sport.heading}</h1>
          <p className="text-xs  leading-5 text-gray-600 dark:text-gray-200">
            {sport.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default SportCard;
