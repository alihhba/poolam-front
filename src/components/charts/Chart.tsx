import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip} from "recharts";

// Types
export interface ChartData {
    [key: string]: string | number;
}

export interface ChartProps {
    data: ChartData[];
    xAxisKey: string;
    yAxisKey: string;
    height?: number | string;
    color?: string;
}

const Chart: React.FC<ChartProps> = ({
                                         data,
                                         xAxisKey,
                                         yAxisKey,
                                         height = 400,
                                         color = "#16a34a"
                                     }) => {
    // Custom tooltip
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                    <p className="font-semibold">{`${xAxisKey}: ${label}`}</p>
                    <p className="text-green-600">{`${yAxisKey}: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{ height }} className="w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                            <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3"/>

                    {/*<XAxis*/}
                    {/*    dataKey={xAxisKey}*/}
                    {/*    axisLine={false}*/}
                    {/*    tickLine={false}*/}
                    {/*    tick={{ fill: '#4B5563', fontSize: 12 }}*/}
                    {/*    interval={0}*/}
                    {/*    textAnchor="end"*/}
                    {/*    height={60}*/}
                    {/*    className={'pt-3'}*/}
                    {/*/>*/}

                    {/*<YAxis*/}
                    {/*    axisLine={false}*/}
                    {/*    tickLine={false}*/}
                    {/*    tick={{ fill: '#4B5563' }}*/}
                    {/*/>*/}

                    <Tooltip content={<CustomTooltip  />} />

                    <Area
                        type="monotone"
                        dataKey={yAxisKey}
                        stroke={color}
                        strokeWidth={2}
                        fill="url(#colorValue)"
                        dot={false}
                        activeDot={true}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
