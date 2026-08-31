import { Text, View } from "react-native"
import Svg, { Circle } from "react-native-svg"
import { GlobalStyles } from "../utilities/GlobalStyles"
import Colors from "../utilities/Colors"
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated"
import { useEffect } from "react"
import ProgressView from "./ProgressView"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type TargetProgressProps = {
  percentage: number
  targetName: string
}

function TargetProgress({ percentage, targetName }: TargetProgressProps) {
  

  return (
    <ProgressView
          
          targetName={targetName}
          percentage={percentage}

        />
  )
}

export default TargetProgress