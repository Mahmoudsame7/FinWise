import { Text, TouchableOpacity, View } from "react-native"
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants"
import Colors from "../../../utilities/Colors"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import SearchSvg from "../../../assets/svg/SearchSvg"
import CalendarSvg from "../../../assets/svg/CalendarSvg"
import DailyBarChart from "./DailyBarChart"
import WeeklyBarChart from "./WeeklyBarChart"
import MonthlyBarChart from "./MonthlyBarChart"
import YearlyBarChart from "./YearlyBarChart"


type PeriodAnalysisChartProps = {
    timespan: string,
    onSearchPress?: () => void;
    data: object[]
}
function PeriodAnalysisChart({timespan,onSearchPress,data}:PeriodAnalysisChartProps){

const renderChart = () => {
    switch (timespan) {
      case 'daily':
        return <DailyBarChart data={data}/>
      case 'weekly':
        return <WeeklyBarChart data={data}/>
      case 'monthly':
        return <MonthlyBarChart data={data}/>
      case 'yearly':
        return <YearlyBarChart data={data}/>
    }
  }
return (
    <View
            style={{
              width: WINDOW_WIDTH - 40,
              alignSelf: 'center',
              backgroundColor: Colors.LightGreen,
              minHeight: WINDOW_HEIGHT * 0.25,
              borderRadius: 50,
              marginTop: 30,
              overflow: 'hidden',
              paddingVertical: 10,
              paddingHorizontal: 15
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
              <Text style={{ ...GlobalStyles.textMedium15 }}>Income & Expenses</Text>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <TouchableOpacity onPress={onSearchPress} style={{ backgroundColor: Colors.MainGreen, width: 25, height: 25, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <SearchSvg />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: Colors.MainGreen, width: 25, height: 25, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <CalendarSvg />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: WINDOW_WIDTH - 90, alignSelf: 'center' }}>
              {renderChart()}
            </View>

          </View>
)
}

export default PeriodAnalysisChart