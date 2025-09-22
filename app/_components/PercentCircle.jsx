import React from "react";

const CircleProgress = ({
  size = 80,
  stroke = 8,
  percent = 50,
  icon: Icon,
  skill,
}) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <svg width={size} height={size}>
        <circle
          stroke="#272626"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          stroke="#e44c00"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />

        <foreignObject
          x={size / 2 - size / 6}
          y={size / 2 - size / 6}
          width={size / 3}
          height={size / 3}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="text-gray-500 w-full h-full" />
          </div>
        </foreignObject>
      </svg>

      <div className="flex flex-col text-zinc-500 items-center">
        <p className="text-orange-500 text-lg">{percent}%</p>
        <p>{skill}</p>
      </div>
    </div>
  );
};

export default CircleProgress;
