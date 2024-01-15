import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Horshoe(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_606_996)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 46a3 3 0 013-3h11a3 3 0 013 3v11a4 4 0 01-4-4v-7h-9v7a4 4 0 01-4 4V46z"
          fill="#1B0B47"
        />
      </G>
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <Defs>
        <ClipPath id="clip0_606_996">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Horshoe
