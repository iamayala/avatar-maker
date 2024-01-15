import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function HappyEye(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_606_618)" fill="#1B0B47">
        <Path d="M30 37.5a1.5 1.5 0 013 0v1.227c0 .15-.122.273-.273.273h-2.454a.273.273 0 01-.273-.273V37.5zM40 37.5a1.5 1.5 0 013 0v1.227c0 .15-.122.273-.273.273h-2.454a.273.273 0 01-.273-.273V37.5z" />
      </G>
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <Defs>
        <ClipPath id="clip0_606_618">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HappyEye