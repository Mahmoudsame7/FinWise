import { BarChart } from "react-native-gifted-charts";
import { WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import Colors from "../../../utilities/Colors";
type WeeklyBarChartProps = {
  data: object[]
}
function WeeklyBarChart({data}:WeeklyBarChartProps) {
    // const barData = [
    //     {
    //       value: 10,
    //       label: '1st Week',
    //       spacing: 8,
    //       labelTextStyle:{
    //         color:'gray',
    //         width:(WINDOW_WIDTH*0.7)/4, //100,
    //         marginHorizontal:-(WINDOW_WIDTH*0.7)/4/3, //100,
    //         // marginHorizontal:-40,
    //         ...GlobalStyles.textRegular12
    //       },
          
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 9, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: '2nd Week',
    //       spacing: 8,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
    //          width:(WINDOW_WIDTH*0.7)/4, //100,
    //        marginHorizontal:-(WINDOW_WIDTH*0.7)/4/3, //100,
    //         // marginHorizontal:-40,
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: '3rd Week',
    //       spacing: 8,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
    //          width:(WINDOW_WIDTH*0.7)/4, //100,
    //         marginHorizontal:-(WINDOW_WIDTH*0.7)/4/3, //100,
    //         // width:100,
    //         // marginHorizontal:-40,
    //          ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 13, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: '4th Week',
    //       spacing: 8,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
    //         width:(WINDOW_WIDTH*0.7)/4, //100,
    //         marginHorizontal:-(WINDOW_WIDTH*0.7)/4/3, //100,
    //         // width:100,
    //         // marginHorizontal:-40,
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
                    spacing={(WINDOW_WIDTH-120)/6}
                    endSpacing={20}
                    // endSpacing={(WINDOW_WIDTH-120)/6}
                    roundedTop
                    stepHeight={35}
                    xAxisType="solid"
                    yAxisThickness={0}
                    yAxisTextStyle={{color: 'gray'}}
                    noOfSections={4}
                    maxValue={10}
                    yAxisLabelSuffix="k"
                    disableScroll={false}
                    isAnimated={true}
                    
                    
                    />
    )
}

export default WeeklyBarChart;