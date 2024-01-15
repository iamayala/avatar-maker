import * as React from "react"
import Svg, { Path, G, Circle, Rect, Defs, ClipPath } from "react-native-svg"

function ThinShape(props: any) {
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
      <G clipPath="url(#clip0_606_529)">
        <Circle cx={18} cy={37} r={5} fill="#F0BD70" />
        <Path
          d="M18 41h17v24.87S31.357 68 26.5 68 18 64.523 18 64.523V41z"
          fill="#F0BD70"
        />
        <Path
          d="M35 53.868c0 5.654-3.5 6.132-6.617 5.119C25.267 57.974 19 49.154 19 43.5s.784-5.5 5.413-5.5C37.5 38.5 35 48.214 35 53.868z"
          fill="#E9B05B"
        />
        <Path
          d="M45.887 36.1C45.887 45.021 42 55 35.5 56.5c-9.5-1-18.07-11.478-18.07-20.4C15.002 25.5 15.502 13 32.002 13s13.885 14.177 13.885 23.1z"
          fill="#FFCB7E"
        />
        <Rect x={36} y={41} width={3} height={2} rx={1} fill="#F0BD70" />
      </G>
      <Defs>
        <ClipPath id="clip0_606_529">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ThinShape