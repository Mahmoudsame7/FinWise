import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function IncomeSvg(props:any) {
  return (
    <Svg
      width={props.width ?? 12}
      height={props.height ?? 12}
      viewBox="0 0 25 25"
      fill="none"
      color={props.color ?? 'black'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={1.04167}
        y={23.9583}
        width={22.9167}
        height={22.9167}
        rx={5.20833}
        transform="rotate(-90 1.042 23.958)"
        stroke={props.color ?? "black"}
        strokeWidth={2.08333}
      />
      <Path
        d="M19.792 6.25c0-.575-.467-1.042-1.042-1.042H9.375a1.042 1.042 0 100 2.084h8.333v8.333a1.042 1.042 0 002.084 0V6.25zM6.987 19.487l12.5-12.5-1.474-1.474-12.5 12.5 1.474 1.474z"
        fill={props.color ?? "black"}
      />
    </Svg>
  )
}

export default IncomeSvg
