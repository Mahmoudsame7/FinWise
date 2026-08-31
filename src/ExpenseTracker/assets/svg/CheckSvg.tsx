import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckSvg(props:any) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.122.5H1.878C1.117.5.5 1.117.5 1.878v8.244c0 .761.617 1.378 1.378 1.378h8.244c.761 0 1.378-.617 1.378-1.378V1.878C11.5 1.117 10.883.5 10.122.5z"
        stroke="#052224"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 6.626L5.303 8.5l4.197-5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CheckSvg
