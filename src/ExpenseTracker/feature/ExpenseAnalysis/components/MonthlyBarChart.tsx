import { BarChart } from "react-native-gifted-charts";
import { WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import Colors from "../../../utilities/Colors";

type MonthlyBarChartProps = {
  data: object[]
}
function MonthlyBarChart({data}:MonthlyBarChartProps) {
    // const barData = [
    //     {
    //       value: 10,
    //       label: 'Jan',
    //       spacing: 3,
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12
    //       },
          
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 9, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Feb',
    //       spacing: 3,
          
    //       labelTextStyle:{
    //          color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Mar',
    //       spacing: 3,
     
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 13, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Apr',
    //       spacing: 2,
          
    //       labelTextStyle:{
    //        color:'gray',
            
    //        width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'May',
    //       spacing: 3,
        
    //       labelTextStyle:{
    //          color:'gray',
            
    //        width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Jun',
    //       spacing: 3,
       
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Jul',
    //       spacing: 3,
   
    //       labelTextStyle:{
    //         color:'gray',
            
    //       width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Aug',
    //       spacing: 3,
          
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Sep',
    //       spacing: 3,
       
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Oct',
    //       spacing: 3,
         
    //       labelTextStyle:{
    //         color:'gray',
            
    //       width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Nov',
    //       spacing: 3,
        
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Dec',
    //       spacing: 3,
          
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/10,
    //         marginHorizontal: -6,
            
    //         ...GlobalStyles.textRegular12

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
                    
                    yAxisLabelContainerStyle={{width:30}}                    
                    initialSpacing={(WINDOW_WIDTH-120)/10}
                    spacing={(WINDOW_WIDTH-120)/10}
                    endSpacing={20}
                    roundedTop
                    stepHeight={35}
                    xAxisType="solid"
                    yAxisThickness={0}
                    yAxisTextStyle={{color: 'gray'}}
                    noOfSections={4}
                    maxValue={15}
                    yAxisLabelSuffix="k"
                    disableScroll={false}
                    isAnimated={true}
                    
                    
                    />
    )
}

export default MonthlyBarChart;