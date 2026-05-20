export const ClassCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div
        className="relative w-full p-[37.5px] bg-linear-to-b from-[#00282C] to-[#008592]
  [mask:linear-gradient(#000_0_0)_no-repeat_50%/calc(100%-50px)_calc(100%-50px),radial-gradient(farthest-side,#000_97%,transparent)_0_0/50px_50px_round]"
      >
        <div className="flex flex-col gap-2 p-6">
          <div className="flex flex-col mb-4">
            <span className="text-[#FFFFFF80] text-sm mb-2">CLASS | 01</span>
            <h1 className="font-slab text-4xl text-[#FFFF23]">Craft Class</h1>
            <h2 className="text-sm text-[#FFFFFFB2] mb-4">
              Sub-activity:{" "}
              <span className="font-semibold text-white">Pottery Painting</span>
            </h2>
            <p className="text-[#FFFFFFB2]">
              Fine motor skills and creative thinking through pottery and
              crafting. All materials provided, all mess contained.
            </p>
          </div>
          <div className="h-0.5 w-full bg-[#0a4245] border-b border-[#008791]" />
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="font-slab text-4xl text-[#FFFF23]">$15</h1>
              <p className="flex flex-col text-xs text-[#F8F7F7]">
                Per student · single drop-in class
                <span className="font-semibold">
                  Or book the full SESSION for $55 (save $5)
                </span>
              </p>
            </div>
            <button
              className="bg-[#00D8E9] text-[#00282C] font-slab text-2xl py-4 px-5 rounded-lg
             hover:bg-[#00f0ff] 
             hover:scale-[1.06] 
             hover:shadow-2xl 
             hover:-translate-y-1 
             active:scale-95 
             transition-all duration-200 ease-out"
            >
              Book Class
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative w-full p-[37.5px] bg-linear-to-b from-[#251132] to-[#8115C1]
  [mask:linear-gradient(#000_0_0)_no-repeat_50%/calc(100%-50px)_calc(100%-50px),radial-gradient(farthest-side,#000_97%,transparent)_0_0/50px_50px_round]"
      >
        <div className="flex flex-col gap-2 p-6">
          <div className="flex flex-col mb-4">
            <span className="text-[#FFFFFF80] text-sm mb-2">CLASS | 02</span>
            <h1 className="font-slab text-4xl text-[#FFFF23]">Art Class</h1>
            <h2 className="text-sm text-[#FFFFFFB2] mb-4">
              Sub-activity:{" "}
              <span className="font-semibold text-white">Canvas Painting</span>
            </h2>
            <p className="text-[#FFFFFFB2]">
              Self-expression through colour, shape, and material. They make
              something every Thursday. You hang it on the fridge.
            </p>
          </div>
          <div className="h-0.5 w-full bg-[#30153e] border-b border-[#8E00DF]" />
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="font-slab text-4xl text-[#FFFF23]">$15</h1>
              <p className="flex flex-col text-xs text-[#F8F7F7]">
                Per student · single drop-in class
                <span className="font-semibold">
                  Or book the full SESSION for $55 (save $5)
                </span>
              </p>
            </div>
            <button
              className="bg-[#D7B3FF] text-[#00282C] font-slab text-2xl py-4 px-5 rounded-lg
             hover:bg-[#C8A4FF] 
             hover:scale-[1.06] 
             hover:shadow-2xl 
             hover:-translate-y-1 
             active:scale-95 
             transition-all duration-200 ease-out"
            >
              Book Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
