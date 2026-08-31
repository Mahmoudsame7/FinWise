import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeSvg(props:any) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 27 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.768 32H2.232c-.327 0-.64-.131-.871-.365A1.255 1.255 0 011 30.753V12.731a1.238 1.238 0 01.398-.914L12.663 1.331a1.219 1.219 0 011.668 0l11.27 10.486a1.248 1.248 0 01.399.914v18.022c0 .33-.13.648-.36.882a1.225 1.225 0 01-.872.365zm-14.165-8.82h5.8a.904.904 0 01.644.274.925.925 0 01.264.656V32H9.689v-7.89a.934.934 0 01.266-.657.913.913 0 01.648-.273z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeSvg
