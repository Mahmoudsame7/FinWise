import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WeddingSvg(props:any) {
  return (
    <Svg
      width={props.width ?? 55}
      height={props.height ?? 50}
      viewBox="0 0 55 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.92 45.25a15.29 15.29 0 01-16.942-3.205A15.3 15.3 0 0116.79 15.93a15.3 15.3 0 0115.3 15.3 15.25 15.25 0 01-4.3 10.63m-9.83-1.28c-.388.049-.78.072-1.17.07a9.42 9.42 0 119.42-9.42 9.401 9.401 0 01-3.13 7m-5.13-15.91a16.72 16.72 0 00-2.56 8.91 16.75 16.75 0 0016.7 16.75 16.75 16.75 0 100-33.5 16.62 16.62 0 00-9.17 2.73M25.05 1.5h14.09l1.95 2.43-9 10.55-9-10.55 1.96-2.43zm2.74 19.1a11.389 11.389 0 014.3-.83 11.46 11.46 0 11-11.46 11.46 11.35 11.35 0 012.15-6.68M25.05 1.5l11.64 7.58m13.41 2.66v5.48m2.74-2.74h-5.48M15.97 1.5v5.48m2.74-2.74h-5.48"
        stroke={props.color ?? "#F1FFF3"}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default WeddingSvg
