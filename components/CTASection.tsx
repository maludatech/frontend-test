export const CTASection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="flex flex-col gap-1 text-[#311058]">
        <h1 className="text-3xl md:text-[40px] font-slab">
          Spots fill fast. Next term starts soon.
        </h1>
        <h2 className="text-base md:text-lg">
          Book at least a week before the term starts to secure your
          child&apos;s place.
        </h2>
      </div>
      <div className="flex gap-2 font-slab text-xl md:text-2xl">
        <button
          className="bg-[#FFFF23] hover:bg-[#F7E800] active:bg-[#EDE600] 
             px-5 py-4 rounded-[8px] text-black font-medium
             transition-all duration-200 
             hover:scale-105 active:scale-95 
             shadow-sm hover:shadow-lg"
        >
          Show me the schedule
        </button>

        <button
          className="bg-[#FFFF23] hover:bg-[#F7E800] active:bg-[#EDE600] 
             px-5 py-4 rounded-[8px] text-black font-medium
             transition-all duration-200 
             hover:scale-105 active:scale-95 
             shadow-sm hover:shadow-lg"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
