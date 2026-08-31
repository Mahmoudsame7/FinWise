import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarSvg(props:any) {
  return (
    <Svg
      width={16}
      height={15}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.879 6.891h13.443M3.464.64v3.215M7.24.64v3.215M11.961.64v3.215M15.74.64v3.215M1.37 2.49h16.465a.73.73 0 01.73.731v11.77a1.497 1.497 0 01-1.497 1.497H2.135A1.497 1.497 0 01.64 14.99V3.22a.73.73 0 01.73-.73z"
        stroke="#093030"
        strokeWidth={1.27712}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CalendarSvg
