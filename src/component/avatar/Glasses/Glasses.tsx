import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"

function Glasses(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_606_982)" stroke="#000" strokeWidth={2}>
        <Circle cx={30.2689} cy={36.2689} r={4.26891} />
        <Circle cx={44.2689} cy={36.2689} r={4.26891} />
        <Path d="M33.9852 35.1056L40.9852 35.002" />
      </G>
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <Defs>
        <ClipPath id="clip0_606_982">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Glasses
