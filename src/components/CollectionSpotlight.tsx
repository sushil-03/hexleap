"use client";
import { spotlights } from "@/contant";
import React from "react";
import SpotlightCard from "./SpotlightCard";
import { SpotlightType } from "@/types.dt";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CollectionSpotlight = () => {
  const handleForwardScroll = () => {
    const ele = document.getElementById("spotlight");
    if (!ele) return;
    sideScroll(ele, "right", 10, 330, 10);
  };
  const handleBackWardScroll = () => {
    const ele = document.getElementById("spotlight");
    if (!ele) return;
    sideScroll(ele, "left", 10, 330, 10);
  };
  function sideScroll(
    element: HTMLElement,
    direction: string,
    speed: number,
    distance: number,
    step: number
  ) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <div className="w-full mt-10  lg:p-10 py-10 md:px-5 px-3 bg-gray-700  dark:bg-dark-gradient bg-light-gradient z-10">
      <div className=" lg:w-5/6 md:w-11/12 w-full mx-auto  flex flex-col gap-10 ">
        <div className=" flex flex-col items-center mx-auto md:gap-6 gap-3 md:w-5/6 sm:w-11/12 w-full sm:px-0 px-3  ">
          <p className=" font-popps lg:text-5xl md:text-3xl sm:text-2xl text-xl font-semibold">
            Collection Spotlight
          </p>
          <p className="text-center md:text-sm text-xs">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <button
            className="py-2 px-1 border-brandBlue border cursor-pointer"
            onClick={() => handleBackWardScroll()}
          >
            <FaChevronLeft className=" text-brandBlue   text-xl" />
          </button>
          <div
            className="flex justify-between items-center  md:min-w-[30rem] sm:min-w-[15rem] min-w-[10rem] overflow-x-scroll sm:gap-5  gap-2"
            id="spotlight"
          >
            {spotlights.map((spotlight: SpotlightType, index) => {
              return <SpotlightCard spotlight={spotlight} key={index} />;
            })}
          </div>
          <button
            className="py-2 px-1 border-brandBlue border"
            onClick={() => handleForwardScroll()}
          >
            <FaChevronRight className=" text-brandBlue   text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionSpotlight;
