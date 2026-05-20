export const ProgressBar = () => {
  return (
    <div className="bg-[#EBEBEB] flex flex-col gap-2 p-4">
      <div className="flex flex-row justify-between font-slab">
        <p className="text-[#003D43] text-[20px]">
          Class holds at 10 students minimum
        </p>
        <span className="text-[#7000B2]">6/10</span>
      </div>
      {/* ProgressBar */}
      <div></div>
    </div>
  );
};
