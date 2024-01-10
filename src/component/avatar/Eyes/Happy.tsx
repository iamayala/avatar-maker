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
      <G clipPath="url(#clip0_164_995)">
        <Rect x={24} y={39} width={5} height={3} rx={1.5} fill="#FF859B" />
        <Rect x={43} y={39} width={4} height={3} rx={1.5} fill="#FF859B" />
        <Path
          d="M30 37.5a1.5 1.5 0 013 0v1.227c0 .15-.122.273-.273.273h-2.454a.273.273 0 01-.273-.273V37.5zM40 37.5a1.5 1.5 0 013 0v1.227c0 .15-.122.273-.273.273h-2.454a.273.273 0 01-.273-.273V37.5z"
          fill="#1B0B47"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_164_995">
          <Rect width={64} height={64} rx={32} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HappyEye