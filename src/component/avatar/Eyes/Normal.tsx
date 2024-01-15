import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

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
      <G clipPath="url(#clip0_606_612)" fill="#1B0B47">
        <Rect x={30} y={36} width={3} height={4} rx={1.5} />
        <Rect x={40} y={36} width={3} height={4} rx={1.5} />
      </G>
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <Defs>
        <ClipPath id="clip0_606_612">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NormalEye
