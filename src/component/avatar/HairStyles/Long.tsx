import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LongHair(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_606_679)">
        <G clipPath="url(#clip1_606_679)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48 25a18 18 0 00-35.993-.5H12V65h11V34.597c2.485-.478 6.78-1.53 12.208-3.756 5.464-2.241 8.873-4.359 10.668-5.637.242 2.524.158 5.16.08 7.61-.036 1.146-.071 2.25-.071 3.285 0 .408-.008.818-.025 1.229.231-.073.447-.153.639-.24 1.5-.684 1.5-1.597 1.5-1.597V25H48zm-33 8a4.98 4.98 0 00-1.62 2.087A5 5 0 0015 41v-8z"
            fill="#1B0B47"
          />
        </G>
      </G>
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <Defs>
        <ClipPath id="clip0_606_679">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
        <ClipPath id="clip1_606_679">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LongHair