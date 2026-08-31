import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MedicineSvg(props:any) {
  return (
    <Svg
      width={props.width || 39}
      height={props.height || 50}
      viewBox="0 0 39 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.723 21.222l17.226 6.73m2.568-4.038A11.695 11.695 0 0137.12 34.58a11.719 11.719 0 01-8.2 11.979 11.605 11.605 0 01-9.74-1.324m16.277-15.224L20.04 40.496m5.036-38.16c4.755 1.86 7.101 7.226 5.24 11.985L19.557 41.813c-1.862 4.758-7.227 7.107-11.982 5.246C2.82 45.2.474 39.832 2.336 35.074L13.093 7.582C14.955 2.823 20.32.474 25.076 2.335z"
        stroke={props.color || "#F1FFF3"}
        strokeWidth={3.39328}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MedicineSvg
