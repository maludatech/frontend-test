import { Progress } from "./ui/progress";

const studentsInitial = [
  { initial: "A", color: "#FF939E" },
  { initial: "F", color: "#C78EFF" },
  { initial: "V", color: "#FF4406" },
  { initial: "C", color: "#00BCCC" },
  { initial: "G", color: "#5FBC35" },
];

export const ProgressBar = () => {
  return (
    <div className="bg-[#EBEBEB] flex flex-col gap-2 p-4 rounded-[6px]">
      <div className="flex flex-row justify-between font-slab">
        <p className="text-[#003D43] text-[20px]">
          Class holds at 10 students minimum
        </p>
        <h4 className="text-[#7000B2] text-[28px]">
          6<span className="text-[#C78EFF]">/10</span>
        </h4>
      </div>
      <Progress
        value={60}
        className="**:data-[slot='progress-indicator']:bg-[#7D00CC] h-3.5 mt-2.5"
      />
      <div className="flex flex-row gap-2 mt-4 items-center">
        <div className="flex items-center -space-x-1">
          {studentsInitial.map((student) => (
            <div
              key={student.initial}
              className="w-6 h-6 flex items-center justify-center rounded-full text-black font-semibold text-xs ring ring-white shadow-sm"
              style={{ backgroundColor: student.color }}
            >
              {student.initial}
            </div>
          ))}
        </div>
        <p className="text-xs">
          <span className="font-semibold">6 students</span> already booked · 4
          spots left
        </p>
      </div>
    </div>
  );
};
