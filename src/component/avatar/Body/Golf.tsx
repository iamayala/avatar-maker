import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function GolfBody(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_166_8)">
        <Rect x={7} y={60} width={40} height={23} rx={9} fill="#E05A33" />
        <Path d="M17 58h19v3s-5 1-9.5 1-9.5-1-9.5-1v-3z" fill="#E05A33" />
        <Path d="M17 58h19v2s-3 1.5-9.5 1.5S17 60 17 60v-2z" fill="#C53926" />
        <Path
          d="M16.5 59a2 2 0 012-2h16a2 2 0 012 2s-5 1-10 1-10-1-10-1z"
          fill="#E05A33"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_166_8">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GolfBody