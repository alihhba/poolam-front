import React from "react";
import {Area, AreaChart, ResponsiveContainer} from "recharts";

const data = [
    { value: 0 },
    { value: 40500 },
    { value: 42000 },
    { value: 30029 },
    { value: 43000 },
    { value: 44000 },
    { value: 46000 },
    { value: 20000 },
    { value: 47000 },
];

const SparkLineChart: React.FC = () => {
    return (
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
                            <stop offset="100%" stopColor="#16a34a" stopOpacity={0.001}/>
                        </linearGradient>
                    </defs>
                    {/*<Tooltip cursor={false} content={() => null} />*/}
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#16a34a"
                        strokeWidth={2}
                        fill="url(#colorValue)"
                        dot={false}
                        activeDot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SparkLineChart;
