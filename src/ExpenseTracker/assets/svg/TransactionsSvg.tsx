import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TransactionsSvg(props:any) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 35 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.78 13.506h9.28v5.034L34 9.77 24.06 1v5.034h-9.28m5.44 7.46h-9.28V8.46L1 17.23 10.94 26v-5.034h9.28"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TransactionsSvg
