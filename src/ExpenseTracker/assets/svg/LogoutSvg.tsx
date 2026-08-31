import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoutSvg(props:any) {
  return (
    <Svg
      width={props.width || 21}
      height={props.height || 30}
      viewBox="0 0 21 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.103 19.843l3.945-4.254a1.177 1.177 0 000-1.492l-3.945-4.255m4.202 4.984H7.647m7.575 10.882v.158a2.433 2.433 0 01-2.433 2.433H3.748a2.432 2.432 0 01-2.433-2.433V3.747a2.433 2.433 0 012.433-2.433h9.04a2.433 2.433 0 012.434 2.433v.086"
        stroke={props.color || "#F1FFF3"}
        strokeWidth={2.63004}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LogoutSvg
