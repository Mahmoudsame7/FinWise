import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AnalysisSvg(props:any) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.765 24.966L32 31M7.451 9.296v11.48m3.956 0V15.46m8.134 5.316v-2.655m-4.178 2.655V9.296m8.2 11.48v-7.09m6.445 1.35c0 7.752-6.493 14.037-14.504 14.037C7.494 29.073 1 22.788 1 15.036 1 7.284 7.494 1 15.504 1s14.504 6.284 14.504 14.036z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default AnalysisSvg
