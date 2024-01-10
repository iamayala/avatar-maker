import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function BlushesEye(props: any) {
  return (
    <Svg
      width={23}
      height={3}
      viewBox="0 0 23 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={5} height={3} rx={1.5} fill="#FF859B" />
      <Rect x={19} width={4} height={3} rx={1.5} fill="#FF859B" />
    </Svg>
  )
}

export default BlushesEye
