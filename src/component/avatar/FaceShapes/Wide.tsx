import * as React from "react"
import Svg, { Path, G, Circle, Rect, Defs, ClipPath } from "react-native-svg"

function WideShape(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke="#7B61FF"
        strokeWidth={0.5}
        d="M0.25 0.25H63.75V63.75H0.25z"
      />
      <G clipPath="url(#clip0_606_523)">
        <Circle cx={18} cy={37} r={5} fill="#F0BD70" />
        <Path
          d="M18 41h17v24.87S31.357 68 26.5 68 18 64.523 18 64.523V41z"
          fill="#F0BD70"
        />
        <Path
          d="M35 53.868c0 5.654-.882 5.118-6.617 5.118s-8.381-4.583-8.381-10.237S19.784 38 24.412 38C37.5 38.5 35 48.214 35 53.868z"
          fill="#E9B05B"
        />
        <Path
          d="M45.887 36.1c0 8.922 3.686 19.893-12.385 19.893-16.072 0-16.072-10.971-16.072-19.894C15.002 25.5 15.502 13 32.002 13s13.885 14.177 13.885 23.1z"
          fill="#FFCB7E"
        />
        <Rect x={36} y={41} width={3} height={2} rx={1} fill="#F0BD70" />
      </G>
      <Defs>
        <ClipPath id="clip0_606_523">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default WideShape