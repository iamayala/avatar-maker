import * as React from "react"
import Svg, { Path, G, Circle, Rect, Defs, ClipPath } from "react-native-svg"

function NormalShape(props: any) {
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
      <G clipPath="url(#clip0_606_517)">
        <Circle cx={18} cy={37} r={5} fill="#F0BD70" />
        <Path
          d="M18 41h17v24.87S31.357 68 26.5 68 18 64.523 18 64.523V41z"
          fill="#F0BD70"
        />
        <Path
          d="M34.811 53.112c0 5.385-.87 4.875-6.533 4.875s-8.276-4.365-8.276-9.75c0-5.384-.215-10.237 4.355-10.237 12.923.476 10.454 9.727 10.454 15.112z"
          fill="#E9B05B"
        />
        <Path
          d="M45.887 36.1c0 8.922-1.385 19.893-12.385 19.893S17.43 45.022 17.43 36.1C15.002 25.5 15.502 13 32.002 13s13.885 14.177 13.885 23.1z"
          fill="#FFCB7E"
        />
        <Rect x={36} y={41} width={3} height={2} rx={1} fill="#F0BD70" />
      </G>
      <Defs>
        <ClipPath id="clip0_606_517">
          <Path fill="#fff" d="M0 0H64V64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NormalShape