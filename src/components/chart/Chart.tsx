import { ChartContainer } from "./Chart.elements"
import { PieChart, Pie, Tooltip, Cell } from 'recharts'

interface PieProps {
    name: string,
    value: number,
    color: string,
}

interface Props {
    width: number
    height: number
    radius:number
    data: PieProps[]
}

export const ChartPie = ({ width, height, radius, data }: Props) => {
    const COLORS: any = []
    
    data.forEach(v => {
        COLORS.push(v.color)
    });

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        return (
            <text key={ index } x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <ChartContainer>
            <PieChart width={width} height={height}>
                <Pie
                    data={ data }
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={radius}
                    fill="#8884d8"
                    dataKey="value"
                >
                    { data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    )) }
                </Pie>
                <Tooltip/>
            </PieChart>
        </ChartContainer>
    )
}