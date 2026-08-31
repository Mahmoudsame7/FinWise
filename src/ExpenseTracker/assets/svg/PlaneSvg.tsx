import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlaneSvg(props:any) {
  return (
    <Svg
      width={props.width ?? 69}
      height={props.height ?? 39}
      viewBox="0 0 69 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M31.807 22.75L21.277 34.1c-.8 1-.23 2.75.91 2.75h3.15c.31.002.617-.074.89-.22l19.21-11.38m-16.51-14.58l-5.16-6.78c-.6-1-.06-2.38.91-2.39h2.5a2 2 0 011.26.47l16.18 12.12m.82 11.2s19.14 1.21 21.56-1.47c1.05-1.16.27-3.11-.5-4-2-2.2-4.09-4.46-7-5.25-4.79-1.3-10-.7-14.85-.57l-29.69 1.35-9.11-10a3.83 3.83 0 00-2.28-.76c-2.55 0-2.16.82-1.82 1.53l5.83 12.16a4.418 4.418 0 01-.31.73 3.25 3.25 0 00-.13 1.72c.43 1.82 2.38 2.06 3.95 2.19 2 .15 4 .36 6.06.52 4.31.33 8.61.65 12.9 1.19m34.17-7.16s-.55 1.93-5.52 1.73"
        stroke={props.color ?? "#F1FFF3"}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PlaneSvg
