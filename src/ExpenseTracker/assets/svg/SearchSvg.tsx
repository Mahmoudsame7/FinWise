import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchSvg(props:any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.532 13.532l3.218 3.218m-1.028-8.514a7.486 7.486 0 11-14.972 0 7.486 7.486 0 0114.972 0z"
        stroke="#093030"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchSvg
