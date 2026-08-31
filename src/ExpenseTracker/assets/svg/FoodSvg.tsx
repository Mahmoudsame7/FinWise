import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FoodSvg(props:any) {
  return (
    <Svg
      width={props.width || 22}
      height={props.height || 37}
      viewBox="0 0 22 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.263 2.235L1.041 13.343a4.478 4.478 0 002.777 4.124l-.847 15.08a2.486 2.486 0 002.41 2.547 2.486 2.486 0 002.408-2.548l-.576-15.079a4.471 4.471 0 002.777-4.124L8.997 2.235m-3.492.375v11.47m14.205 3.179a1.604 1.604 0 00-1.389 1.68l.764 13.614a2.486 2.486 0 01-2.41 2.548 2.485 2.485 0 01-2.408-2.548L14.8 18.3a1.991 1.991 0 00-.534-1.437V1.041s7.949.333 5.422 16.218h.02z"
        stroke={props.color || "#093030"}
        strokeWidth={2.08276}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FoodSvg
