import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileSvg(props:any) {
  return (
    <Svg
      width={props.width || 25}
      height={props.height || 25}
      viewBox="0 0 24 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.769 19.329a10.61 10.61 0 00-.766 4.202c0 5.959 21.983 5.959 21.994 0a10.61 10.61 0 00-.765-4.202 10.772 10.772 0 00-2.368-3.583 11.012 11.012 0 00-3.598-2.401 11.184 11.184 0 00-8.532 0 11.011 11.011 0 00-3.598 2.401 10.772 10.772 0 00-2.367 3.583zM11.992 9.663c2.438 0 4.415-1.94 4.415-4.332S14.43 1 11.992 1C9.553 1 7.577 2.94 7.577 5.331c0 2.392 1.976 4.332 4.415 4.332z"
        stroke={props.color || "black"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileSvg
