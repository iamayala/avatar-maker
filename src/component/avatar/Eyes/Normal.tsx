import * as React from "react"
import Svg, { G, Rect, Defs, ClipPath } from "react-native-svg"

function NormalEye(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_161_239)">
        <Rect x={30} y={36} width={3} height={4} rx={1.5} fill="#1B0B47" />
        <Rect x={40} y={36} width={3} height={4} rx={1.5} fill="#1B0B47" />
        <Rect x={24} y={39} width={5} height={3} rx={1.5} fill="#FF859B" />
        <Rect x={43} y={39} width={4} height={3} rx={1.5} fill="#FF859B" />
      </G>
      <Defs>
        <ClipPath id="clip0_161_239">
          <Rect width={64} height={64} rx={32} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NormalEye
