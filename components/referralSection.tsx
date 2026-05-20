import { Separator } from "./ui/separator";

export const ReferralSection = () => {
  const referralBonus = [
    {
      id: 1,
      bonus: "Your friend saves",
      bold: " 10%",
    },
    {
      id: 2,
      bonus: "Class gets",
      bold: " closer to running",
    },
    {
      id: 3,
      bonus: "You work toward",
      bold: " 20% off",
    },
  ];

  return (
    <div className="bg-[#EBEBEB] flex flex-col gap-2 p-4 rounded-[6px]">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col">
          <h2 className="font-medium text-[#7015A5] text-sm uppercase mb-1.5">
            Invite friends
          </h2>
          <h4 className="text-2xl font-semibold font-slab text-[#7000B2]">
            Your share fills the room.
            <br />
            <span className="text-[#1D0034]">And gets you a deal.</span>
          </h4>
          <p className="text-sm text-[#1D0034] mt-1.5">
            Classes only run at 10 students. Every friend who books moves the
            needle for everyone including you.
          </p>
          <div className="flex flex-col mt-4 sm:flex-row gap-2">
            {referralBonus.map((bonus) => (
              <div
                key={bonus?.id}
                className="flex flex-row gap-2 items-center rounded-lg py-1 px-2 bg-[#E9D6FF]"
              >
                <p className="text-sm">
                  {bonus?.bonus}{" "}
                  <span className="font-bold text-[#8E00DF]">
                    {bonus?.bold}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-2 py-3 rounded-[4.8px] bg-linear-to-b from-[#E7D8FD] to-[#C9A7FC]">
          <h2 className="text-[#5C5C5C]">YOUR GOAL</h2>
          <h1 className="text-xl bg-linear-to-b from-[#69437F] to-[#3C2749] bg-clip-text text-transparent font-slab mt-1.5">
            Get 3 friends to book
            <br />
            within 30 days
          </h1>
          <p className="text-[#3D3D3D] text-xs">
            Your next class drops to 20% off. One booking in so far.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between gap-1">
              <p className="text-[#8E00DF] text-xs">Friends booked</p>
              <h4 className="text-[#8E00DF] text-xs">
                6<span className="text-[#B765FF]">/10</span>
              </h4>
            </div>
            <div className="flex flex-row gap-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-full h-2.5 rounded-[6.6px] ${
                    i === 1
                      ? "bg-linear-to-b from-[#AA24FF] to-[#8900E0]"
                      : "bg-[#E6E6E6]"
                  }`}
                />
              ))}
            </div>
            <p className="text-[#37005C] text-[10px]">
              2 more bookings in 30 days = 20% off your next class
            </p>
            <Separator className="bg-[#C78EFF] my-2" />
            <div className="flex gap-1 items-center">
              <div className="px-2 py-1 bg-[#37005C] rounded-lg text-center text-[#D7B3FF] text-[10px]">
                Goal Reward
              </div>
              <p className="text-[10px] text-[#37005C]">
                20% off your next class when all 3 book
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 md:mt-0">
        <button
          className="w-fit px-4.25 py-3 
             bg-[#D7B3FF] hover:bg-[#C38EFF] 
             text-[#00282C] text-xl font-slab 
             rounded-xl 
             transition-all duration-200 
             hover:scale-105 active:scale-95 
             shadow-sm hover:shadow-md"
        >
          Get My Invite Link (10% Off)
        </button>
        <p className="text-xs pt-2 text-[#1D0034]">
          Every friend who books also moves the class counter above helping
          secure the session for everyone who&apos;s already in.
        </p>
      </div>
    </div>
  );
};
