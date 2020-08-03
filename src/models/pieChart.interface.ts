interface IPieChartItem {
    key: string,
    color: PieColors,
    value: number
}
const pieData: Array<IPieChartItem> = [
    { key: "Apple", value: 99, color: PieColors.yellow },
    { key: "Microsoft", value: 22, color: PieColors.blue },
    { key: "IBM", value: 120, color: PieColors.red }

]