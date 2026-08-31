import { Text, View } from "react-native"
import Svg, { Circle } from "react-native-svg"


import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated"
import { useEffect } from "react"
import Colors from "../utilities/Colors"
import { GlobalStyles } from "../utilities/GlobalStyles"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type ProgressViewProps = {
  percentage: number
  targetName?: string
  component?: React.ReactNode
  customStyle?: object
  innerCircleSize?: number
  innerCircleColor?: string
  targetTextStyle?: object
}

function ProgressView({ targetName,percentage, targetTextStyle,component, customStyle, innerCircleSize, innerCircleColor }: ProgressViewProps) {
  const size = innerCircleSize ?? 103
  const strokeWidth = 4
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withTiming(percentage, {
      duration: 1000,
      easing: Easing.out(Easing.cubic),
    })
  }, [percentage])

  const animatedProps = useAnimatedProps(() => {
    const progressStroke = (progress.value / 100) * circumference
    return {
      strokeDasharray: `${progressStroke} ${circumference}`,
    }
  })

  return (
    <View
      style={[{
        backgroundColor: Colors.LightBlue,
        borderRadius: 45,
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
      },customStyle]}
    >
      <View
        style={{
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Svg width={size} height={size} style={{ position: "absolute" }}>
          {/* Background circle — static, no changes needed */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={Colors.HoneyDew}
            strokeWidth={strokeWidth}
            fill={ innerCircleColor ?? Colors.LightBlue}
          />
          {/* Animated progress circle */}
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={Colors.OceanBlue}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
            animatedProps={animatedProps}
          />
        </Svg>
          {component ? 
          component : 
          <Text style={{ ...GlobalStyles.textSemiBold20, color: Colors.HoneyDew }}>
            {percentage}%
          </Text>}
          
       
      </View>

      <Text
              style={[{
                ...GlobalStyles.textMedium15,
                color: Colors.HoneyDew,
                marginTop: 10,
                textAlign: "center",
              }, targetTextStyle]}
            >
              {targetName}
    </Text>
      
    </View>
  )
}

export default ProgressView