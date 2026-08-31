import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TransportSvg(props:any) {
  return (
    <Svg
      width={props.width || 48}
      height={props.height || 49}
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.95 9.1v17.83m-9.1 13.74v3.34a2.52 2.52 0 01-2.52 2.52H9.64a2.52 2.52 0 01-2.52-2.52v-7m25.96 3.66v3.34a2.52 2.52 0 002.52 2.52h2.69a2.52 2.52 0 002.52-2.52v-7m-20.54-.7h7.35m-16.34-5.36s-.28 3.64 3.74 3.16m21.59-3.16s.28 3.64-3.74 3.16m7.98-22.07h2.69a2.89 2.89 0 012.89 2.9v4.54M7.08 12.04H4.39a2.89 2.89 0 00-2.89 2.9v4.54M10.92 1.5h26.06a3.84 3.84 0 013.84 3.84v31.5a3.84 3.84 0 01-3.84 3.84H10.92a3.84 3.84 0 01-3.84-3.84V5.34a3.84 3.84 0 013.84-3.84zm-.13 7.6H37.1a3.71 3.71 0 013.71 3.71v14.12H7.08V12.81a3.71 3.71 0 013.71-3.71z"
        stroke={props.color || "#F1FFF3"}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TransportSvg
