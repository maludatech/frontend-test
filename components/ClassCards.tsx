export const ClassCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative w-full bg-linear-to-b from-[#00282C] to-[#008592]">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8,8"
            rx="16"
          />
        </svg>
        <div className="flex flex-col gap-2 p-6">
          <h2 className="text-[#FFFFFF80] text-sm">CLASS | 01</h2>
          <h1 className="font-slab text-4xl text-[#FFFF23]">Craft Class</h1>
          <h4>Sub-activity: Pottery Painting</h4>
          <p>
            Fine motor skills and creative thinking through pottery and
            crafting. All materials provided, all mess contained.
          </p>
        </div>
      </div>
      <div className="relative w-full bg-linear-to-b from-[#251132] to-[#8115C1]">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8,8"
            rx="16"
          />
        </svg>
        <div className="p-6">{/* Card content */}</div>
      </div>
    </div>
  );
};
