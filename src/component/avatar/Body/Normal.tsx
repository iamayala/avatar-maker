import * as React from "react"
import Svg, { G, Rect, Defs, ClipPath, Path } from "react-native-svg"

function NormalBody(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_166_50)">
        <Rect x={7} y={60} width={40} height={23} rx={9} fill="#E05A33" />
      </G>
      <Defs>
        <ClipPath id="clip0_166_50">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NormalBody
