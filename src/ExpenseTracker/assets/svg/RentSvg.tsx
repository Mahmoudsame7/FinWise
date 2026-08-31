import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function RentSvg(props:any) {
  return (
    <Svg
      width={props.width || 51}
      height={props.height || 44}
      viewBox="0 0 51 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_9056_234)">
        <Path
          d="M20.9 31.59h10a3.48 3.48 0 003.47-3.47 3.48 3.48 0 00-3.47-3.46h-6.34a14.29 14.29 0 01-4.19-.68c-2.51-.54-6.57-.57-8.43 4.14h-4m26.38 0l9-5.3a3.47 3.47 0 014.76 1.16 3.48 3.48 0 01-1.15 4.76L35.16 37.6a12.09 12.09 0 01-7.28 2.43h-20m23.1-27.6l-2.45 2.46a.161.161 0 01-.177.037.162.162 0 01-.053-.036l-1.51-2.47h-6.6a8 8 0 11-2.94-9.469 8 8 0 012.94 3.719H34.9l3.76 3.19-5 5.17-2.68-2.55M7.9 26.35a.54.54 0 00-.54-.54H2.09a.54.54 0 00-.54.54v15.43a.54.54 0 00.54.54h5.27a.54.54 0 00.54-.54V26.35z"
          stroke={props.color || "#F1FFF3"}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.57 11.2a2.16 2.16 0 100-4.32 2.16 2.16 0 000 4.32z"
          fill="#F1FFF3"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_9056_234">
          <Path fill="#fff" d="M0 0H50.09V43.82H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RentSvg
