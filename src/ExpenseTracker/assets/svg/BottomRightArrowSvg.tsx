import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BottomRightArrowSvg(props:any) {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.821 1l3.886 15.32-15.8.117m15.8-.117L1 2.654"
        stroke={props.color ?? "#093030"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BottomRightArrowSvg
