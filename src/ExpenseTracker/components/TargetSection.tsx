import { Text, View } from "react-native"
import { GlobalStyles } from "../utilities/GlobalStyles"
import Colors from "../utilities/Colors"
import Svg, { Circle } from "react-native-svg";
import TargetProgress from "./TargetProgress";
import ProgressView from "./ProgressView";

function TargetSection() {



  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ ...GlobalStyles.textMedium15, marginHorizontal: 30 }}>My Targets</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 20, marginTop: 15 }}>

        
        <TargetProgress targetName="Travel" percentage={30} />
        <TargetProgress targetName="Car" percentage={40} />



      </View>
    </View>
  )
}

export default TargetSection