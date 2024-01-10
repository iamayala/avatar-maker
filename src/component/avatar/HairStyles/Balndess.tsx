import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function BlandessHair(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={14} y={26} width={9} height={2} rx={1} fill="#1B0B47" />
      <Rect x={14} y={33} width={7} height={2} rx={1} fill="#1B0B47" />
      <Rect x={12} y={29} width={13} height={3} rx={1.5} fill="#1B0B47" />
    </Svg>
  )
}

export default BlandessHair
