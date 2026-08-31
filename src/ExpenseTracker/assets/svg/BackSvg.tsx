import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Colors from "../../utilities/Colors"

function BackSvg(props:any) {
  return (
    <Svg
      width={22}
      height={18}
      viewBox="0 0 42 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.818 35.599L1.134 18.359 22.818 1.135M1.134 18.36h39"
        stroke={Colors.LightGreen}
        strokeWidth={5.26744}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BackSvg
