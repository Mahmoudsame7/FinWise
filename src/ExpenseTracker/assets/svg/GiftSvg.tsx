import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GiftSvg(props:any) {
  return (
    <Svg
      width={props.width || 51}
      height={props.height || 53}
      viewBox="0 0 51 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M44.414 28.964v18.902a3.281 3.281 0 01-3.281 3.281H9.264a3.281 3.281 0 01-3.28-3.281V28.964m19.214-11.99s11.954-.687 14.922-3.003a6.815 6.815 0 001.194-9.53 6.828 6.828 0 00-9.554-1.206c-2.943 2.316-6.562 13.74-6.562 13.74zm0 0s-11.954-.687-14.921-3.003a6.803 6.803 0 013.345-12.109 6.816 6.816 0 015.026 1.373c2.932 2.316 6.55 13.74 6.55 13.74zm0 0v34.173M4.85 16.974h40.71a3.04 3.04 0 013.04 3.04v4.511a3.04 3.04 0 01-3.04 3.04H4.85a3.04 3.04 0 01-3.04-3.04v-4.511a3.04 3.04 0 013.04-3.04z"
        stroke={props.color || "#F1FFF3"}
        strokeWidth={3.61872}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default GiftSvg
