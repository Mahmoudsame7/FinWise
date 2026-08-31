import { BarChart } from "react-native-gifted-charts";
import { WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import Colors from "../../../utilities/Colors";
import { useMemo } from "react";
import { generateDailyBarData } from "../../../utilities/TransactionHelpers";
import { useExpenseStore } from "../../../context/useTransactionStore";

type DailyBarChartProps = {
  data: object[]
}
function DailyBarChart({data}:DailyBarChartProps) {
    // const barData = [
    //     {
    //       value: 10,
    //       label: 'Sun',
    //       spacing: 3,
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/9,
    //         marginHorizontal: -8,
            
    //         ...GlobalStyles.textRegular12
    //       },
          
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 9, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Mon',
    //       spacing: 3,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //          color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/9,
    //         marginHorizontal: -8,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Tue',
    //       spacing: 3,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/9,
    //         marginHorizontal: -8,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 13, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Wed',
    //       spacing: 2,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //        color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/9,
    //         marginHorizontal: -8,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Thu',
    //       spacing: 3,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //          color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/9,
    //         marginHorizontal: -8,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Fri',
    //       spacing: 3,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/9,
    //         marginHorizontal: -8,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
    //     {
    //       value: 10,
    //       label: 'Sat',
    //       spacing: 3,
    //       labelWidth: 30,
    //       labelTextStyle:{
    //         color:'gray',
            
    //         width: (WINDOW_WIDTH-120)/9,
    //         marginHorizontal: -8,
            
    //         ...GlobalStyles.textRegular12

    //       },
    //       frontColor: Colors.MainGreen,
    //     },
    //     {value: 14, frontColor: Colors.OceanBlue},
        
    // ];
    
    const {expenses} = useExpenseStore()

    const barData = useMemo(()=>{
      return generateDailyBarData(expenses)
    },[])
    return (
        <BarChart
                    data={data}
                    rulesType="dashed"
                    barWidth={5}
                    
                    yAxisLabelContainerStyle={{width:40}}                    
                    initialSpacing={(WINDOW_WIDTH-120)/9}
                    spacing={(WINDOW_WIDTH-120)/9}
                    endSpacing={20}
                    roundedTop
                    stepHeight={35}
                    xAxisType="solid"
                    yAxisThickness={0}
                    yAxisTextStyle={{color: 'gray'}}
                    noOfSections={4}
                    maxValue={500}
                    // yAxisLabelSuffix="k"
                    disableScroll={false}
                    isAnimated={true}
                    
                    
                    />
    )
}

export default DailyBarChart;