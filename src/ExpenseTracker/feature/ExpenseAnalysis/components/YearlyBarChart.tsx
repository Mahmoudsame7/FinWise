import { BarChart } from "react-native-gifted-charts";
import { WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import Colors from "../../../utilities/Colors";
type YearlyBarChartProps = {
  data : object[]
}
function YearlyBarChart({data}:YearlyBarChartProps) {
    // const barData = [
    //     {
    //       value: 10,
    //       label: '2023',
    //       spacing: 8,
    //       labelTextStyle:{
    //         color:'gray',
    //         width:(WINDOW_WIDTH-120)/6,
    //         marginHorizontal: -10,
    //         // marginHorizontal:-40,
    //         ...GlobalStyles.textRegular12
    //       },
          
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 9, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: '2024',
    //       spacing: 8,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
    //         width:(WINDOW_WIDTH-120)/6,
    //         marginHorizontal: -10,
    //         // marginHorizontal:-40,
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: '2025',
    //       spacing: 8,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
    //         width:(WINDOW_WIDTH-120)/6,
    //         marginHorizontal: -10,
    //         // width:100,
    //         // marginHorizontal:-40,
    //          ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 13, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: '2026',
    //       spacing: 8,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
    //         width:(WINDOW_WIDTH-120)/6,
    //         marginHorizontal: -10,
            
    //          ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
        
    // ];
    return (
        <BarChart
                    data={data}
                    rulesType="dashed"
                    barWidth={5}
                    // width={WINDOW_WIDTH*0.7}
                    yAxisLabelContainerStyle={{width:30}}
                    
                    // adjustToWidth={true}
                    
                    initialSpacing={(WINDOW_WIDTH-120)/6}
                    spacing={(WINDOW_WIDTH-120)/(data.length/2)}
                    // endSpacing={20}
                    // endSpacing={(WINDOW_WIDTH-120)/6}
                    roundedTop
                    stepHeight={35}
                    xAxisType="solid"
                    yAxisThickness={0}
                    yAxisTextStyle={{color: 'gray'}}
                    noOfSections={4}
                    maxValue={100}
                    yAxisLabelSuffix="k"
                    disableScroll={true}
                    isAnimated={true}
                    
                    
                    />
    )
}

export default YearlyBarChart;