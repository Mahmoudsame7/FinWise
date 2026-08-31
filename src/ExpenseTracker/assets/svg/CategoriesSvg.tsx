import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CategoriesSvg(props:any) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 17.474L14.5 24 28 17.474M1 12.399l13.064 6.31a.988.988 0 00.85 0l13.075-6.322M1.752 7.825l12.496 6.068a.593.593 0 00.505 0l12.502-6.068a.419.419 0 00.17-.15.397.397 0 00-.17-.578l-12.502-6.04a.593.593 0 00-.505 0L1.752 7.124a.416.416 0 00-.152.149.396.396 0 00.152.551z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CategoriesSvg
