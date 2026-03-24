import Image from "next/image";
import { Button } from "./ui/button";

export async function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-8 relative w-full flex flex-col md:flex-row items-start justify-between gap-8">
      {/* Left: Text content */}
      <div className="flex flex-col items-start gap-7 w-full md:max-w-134.25 md:pt-18.5">
        <h1 className="font-semibold text-white text-2xl md:text-[32px] tracking-[0] leading-normal m-0">
          <span className="text-[#ffffff]">Elias is a </span>
          <span className="text-[#c778dd]">web designer</span>
          <span className="text-[#ffffff]"> and </span>
          <span className="text-[#c778dd]">front-end developer</span>
        </h1>

        <p className="font-normal text-gray text-base tracking-[0] leading-6.25 max-w-115.75 m-0">
          He crafts responsive websites where technologies meet creativity
        </p>

        <Button
          variant="secondary"
          className="h-auto inline-flex items-center gap-2.5 px-4 py-2 border border-solid border-[#c778dd] bg-transparent rounded-none hover:bg-[#c778dd]/10 [font-family:'Fira_Code',Helvetica] font-medium text-white text-base tracking-[0] leading-normal cursor-pointer"
        >
          Contact me!!
        </Button>
      </div>

      {/* Right: Image + decorations */}
      <div className="relative w-full md:w-117.25 md:h-105.75 h-75 shrink-0">
        {/* Decorative bracket images */}
        {/* <div className="absolute top-[84px] left-0 w-[155px] h-[155px] hidden md:block">
          <img
            className="absolute top-[39px] left-0 w-[78px] h-[116px]"
            alt="Union"
          />
          <img
            className="absolute -top-px left-[76px] w-20 h-[118px]"
            alt="Union"
          />
        </div> */}

        {/* Hero image */}
        <img
          className="absolute top-0 left-3 w-full md:w-114.25 h-full md:h-96.5 object-cover"
          alt="Image"
          src={"/Image.png"}
        />

        {/* Dot grid decoration */}
        <div className="absolute top-61.5 left-92.25 hidden md:flex flex-col w-21 h-21 items-start justify-between">
          {Array.from({ length: 5 }).map((_, rowIdx) => (
            <div
              key={`dot-row-${rowIdx}`}
              className="flex items-start justify-between w-full flex-[0_0_auto]"
            >
              {Array.from({ length: 5 }).map((_, colIdx) => (
                <div
                  key={`dot-${rowIdx}-${colIdx}`}
                  className="w-1 h-1 bg-gray rounded-sm"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Currently working on badge */}
        <div className="absolute top-[calc(100%-37px)] left-7.75 flex w-[calc(100%-31px)] md:w-100.5 items-center gap-2.5 p-2 bg-app-background border border-solid border-[#abb2bf]">
          <div className="w-4 h-4 shrink-0 bg-app-primary border border-solid border-[#c778dd]" />
          <p className="font-normal text-gray text-sm md:text-base tracking-[0] leading-normal m-0 truncate">
            <span className="font-medium text-[#abb2bf]">
              Currently working on{" "}
            </span>
            <span className="font-semibold text-[#ffffff]">Portfolio</span>
          </p>
        </div>
      </div>
    </section>
  );
}
