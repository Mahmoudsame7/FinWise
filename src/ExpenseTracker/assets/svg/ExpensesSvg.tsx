import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ExpensesSvg(props:any) {
  return (
    <Svg
      width={props.width ?? 12}
      height={props.height ?? 12}
      color={props.color ?? 'black'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={1.04167}
        y={1.04167}
        width={22.9167}
        height={22.9167}
        rx={5.20833}
        stroke={props.color ?? 'black'}
        strokeWidth={2.08333}
      />
      <Path
        d="M18.75 19.792c.575 0 1.042-.467 1.042-1.042V9.375a1.042 1.042 0 00-2.084 0v8.333H9.375a1.042 1.042 0 000 2.084h9.375zM5.513 6.987l12.5 12.5 1.474-1.474-12.5-12.5-1.474 1.474z"
        fill={props.color ?? 'black'}
      />
    </Svg>
  )
}

export default ExpensesSvg
