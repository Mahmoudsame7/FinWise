import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DollarSvg(props:any) {
  return (
    <Svg
      width={props.width ?? 13}
      height={props.height ?? 28}
      viewBox="0 0 13 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 19.263a5.15 5.15 0 001.61 3.721 5.627 5.627 0 003.89 1.542m0 0a5.628 5.628 0 003.888-1.541 5.15 5.15 0 001.61-3.722 4.785 4.785 0 00-.558-2.345A5.032 5.032 0 009.793 15.1c-2.169-1.255-5.164-.88-7.065-2.575a5.235 5.235 0 01-1.27-1.718A5.037 5.037 0 011 8.749c0-1.397.58-2.736 1.61-3.724A5.633 5.633 0 016.5 3.48a5.633 5.633 0 013.889 1.545 5.157 5.157 0 011.61 3.724m-5.5 15.777V27m0-26v2.474"
        stroke={props.color ?? "#093030"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DollarSvg
