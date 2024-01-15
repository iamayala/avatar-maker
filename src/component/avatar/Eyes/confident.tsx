import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function ConfidentEye(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_606_614)">
        <G clipPath="url(#clip1_606_614)">
          <Rect x={24} y={39} width={5} height={3} rx={1.5} fill="#FF859B" />
          <Rect x={43} y={39} width={4} height={3} rx={1.5} fill="#FF859B" />
          <Path
            d="M43 37.5a1.5 1.5 0 01-3 0v-1.227c0-.15.122-.273.273-.273h2.454c.15 0 .273.122.273.273V37.5zM33 37.5a1.5 1.5 0 01-3 0v-1.227c0-.15.122-.273.273-.273h2.454c.15 0 .273.122.273.273V37.5z"
            fill="#1B0B47"
          />
          <Path
            stroke="#1B0B47"
            strokeLinecap="round"
            d="M29.5 36.5L33.5 36.5"
          />
          <Path
            stroke="#1B0B47"
            strokeLinecap="round"
            d="M39.5 36.5L43.5 36.5"
          />
        </G>
      </G>
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <Defs>
        <ClipPath id="clip0_606_614">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
        <ClipPath id="clip1_606_614">
          <Rect width={64} height={64} rx={32} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ConfidentEye