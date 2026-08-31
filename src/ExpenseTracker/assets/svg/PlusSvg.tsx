import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusSvg(props:any) {
  return (
    <Svg
      width={props.width || 43}
      height={props.height || 43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 20.2h39M21.067 41V2"
        stroke={props.color || "#F1FFF3"}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default PlusSvg
