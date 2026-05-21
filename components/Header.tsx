"use client";
import { useState } from "react";

export const Header = () => {
  const [activeSwitch, setActiveSwitch] = useState("switch1");
  return (
    <header className="flex flex-col gap-16 pt-15">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <h1 className="font-light text-5xl sm:text-6xl leading-none tracking-normal  text-[#4F2A7A] font-slab">
          Classes that
          <br /> <span className="text-[#AD67FF]">spark something.</span>
        </h1>
        <div className="flex flex-col gap-2.5">
          <p className="text-[#37005C] text-lg max-w-md">
            One class a week. Four a month. Classes only run when 10 students
            are in.
          </p>
          <div className="border border-[#B765FF] bg-[#E9D6FF] text-[#37005C] rounded-full px-4 py-2.5 w-fit">
            Once a week{" "}
            <span className="font-semibold">· 4 classes per month</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 bg-[#FFFFFF] shadow-[inset_0px_0.86px_1.72px_0.43px_#00000059] w-fit p-2 rounded-[4.8px]">
        <div
          className={`flex flex-col gap-1 w-full py-3 px-2 rounded-md border-2 
    ${
      activeSwitch === "switch1"
        ? "bg-linear-to-b from-[#E7D8FD] to-[#C9A7FC] shadow-[0_2px_5px_#00000073,0_9px_9px_#00000063,0_21px_13px_#0000003B,0_37px_15px_#00000012,0_58px_16px_#00000003] border-[1.2px] border-transparent [border-image:linear-gradient(180deg,#FFFFFF_0%,#A76CF9_100%)_1]"
        : "bg-[#EBEBEB]"
    } 
    cursor-pointer transition-all duration-200`}
          onClick={() => setActiveSwitch("switch1")}
        >
          <h1
            className={`text-2xl font-slab ${activeSwitch === "switch1" ? "bg-linear-to-b from-[#69437F] to-[#3C2749] bg-clip-text text-transparent" : "text-[#37005C]"} `}
          >
            $15
          </h1>
          <h2
            className={`text-sm ${activeSwitch === "switch1" ? "text-[#3D3D3D]" : "text-[#5C5C5C]"}`}
          >
            Single Class
          </h2>
          <p
            className={`text-xs ${activeSwitch === "switch1" ? "text-[#5C5C5C]" : "text-[#858585]"}`}
          >
            Pay per class • No Commitment
          </p>
        </div>
        <div
          className={`flex flex-col gap-1 w-full py-3 px-2 rounded-md border-2 
    ${
      activeSwitch === "switch2"
        ? "bg-linear-to-b from-[#E7D8FD] to-[#C9A7FC] shadow-[0_2px_5px_#00000073,0_9px_9px_#00000063,0_21px_13px_#0000003B,0_37px_15px_#00000012,0_58px_16px_#00000003] border-[1.2px] border-transparent [border-image:linear-gradient(180deg,#FFFFFF_0%,#A76CF9_100%)_1]"
        : "bg-[#EBEBEB]"
    } 
    cursor-pointer transition-all duration-200`}
          onClick={() => setActiveSwitch("switch2")}
        >
          <h1
            className={`text-2xl font-slab ${activeSwitch === "switch2" ? "bg-linear-to-b from-[#69437F] to-[#3C2749] bg-clip-text text-transparent" : "text-[#37005C]"} `}
          >
            $55
          </h1>
          <h2
            className={`text-sm ${activeSwitch === "switch2" ? "text-[#3D3D3D]" : "text-[#5C5C5C]"}`}
          >
            Full Session
          </h2>
          <p
            className={`text-xs ${activeSwitch === "switch2" ? "text-[#5C5C5C]" : "text-[#858585]"}`}
          >
            Four Classes <span className="font-bold">• Save $5</span>
          </p>
        </div>
      </div>
    </header>
  );
};
