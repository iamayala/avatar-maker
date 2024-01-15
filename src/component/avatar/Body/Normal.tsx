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
      <G clipPath="url(#clip0_606_497)">
        <G clipPath="url(#clip1_606_497)">
          <Rect x={7} y={60} width={40} height={23} rx={9} fill="#FF4DD8" />
        </G>
      </G>
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <Defs>
        <ClipPath id="clip0_606_497">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
        <ClipPath id="clip1_606_497">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NormalBody
