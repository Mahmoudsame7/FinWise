import { Text, TouchableOpacity, View } from "react-native"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import Colors from "../../../utilities/Colors"


type TimePeriodTabProps = {
    periods: string[],
    timespan: string,
    setTimespan: Function,
    containerStyle?: object,

}
function TimePeriodTab ({timespan,setTimespan,periods,containerStyle}:TimePeriodTabProps) {
    return (
         <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.LightGreen, marginHorizontal: 20, height: 60, borderRadius: 22, paddingHorizontal: 5, gap: 5 }, containerStyle]}>
            {
              periods.map((period, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => {
                    if (timespan != period) {
                      setTimespan(period)
                    }
                  }} style={{ backgroundColor: timespan == period ? Colors.MainGreen : '', height: '80%', borderRadius: 19, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...GlobalStyles.textRegular15 }}>{period.charAt(0).toUpperCase() + period.slice(1)}</Text>
                  </TouchableOpacity>
                )
              }
            )
            }
            
          
          </View>
    )
}
export default TimePeriodTab;