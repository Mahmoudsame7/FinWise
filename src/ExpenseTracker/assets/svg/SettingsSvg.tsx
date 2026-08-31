import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingsSvg(props:any) {
  return (
    <Svg
      width={props.width || 30}
      height={props.height || 31}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.56 16.792l3.697 2.135a.726.726 0 01.287.988l-2.815 4.874a.726.726 0 01-.987.265l-3.693-2.11a9.735 9.735 0 01-2.628 1.511v4.266a.723.723 0 01-.722.726h-5.625a.725.725 0 01-.726-.726v-4.266a9.798 9.798 0 01-2.629-1.51l-3.688 2.11a.726.726 0 01-.987-.266l-2.815-4.874a.726.726 0 01.266-.988l3.697-2.135a9.913 9.913 0 01-.131-1.515 9.904 9.904 0 01.13-1.51L1.496 11.63a.726.726 0 01-.295-.987L4.014 5.77a.726.726 0 01.988-.266l3.688 2.11a9.924 9.924 0 012.629-1.515V1.833a.726.726 0 01.725-.722h5.634a.721.721 0 01.721.722v4.266c.95.366 1.836.877 2.63 1.515l3.692-2.11a.726.726 0 01.987.266l2.815 4.874a.726.726 0 01-.266.987l-3.697 2.136c.081.5.123 1.004.127 1.51a9.92 9.92 0 01-.127 1.515z"
        stroke={props.color || "#F1FFF3"}
        strokeWidth={2.22242}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SettingsSvg
