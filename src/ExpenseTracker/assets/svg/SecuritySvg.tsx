import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SecuritySvg(props:any) {
  return (
    <Svg
      width={props.width || 30}
      height={props.height || 31}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.04 16.813l2.35 1.839 6.445-6.679m-5.25-10.862s4.083 5.4 12.956 4.09c0 0 4.523 20.507-12.962 24.446C-2.906 25.73 1.644 5.201 1.644 5.201c8.873 1.289 12.94-4.09 12.94-4.09z"
        stroke={props.color || "#F1FFF3"}
        strokeWidth={2.22242}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SecuritySvg
