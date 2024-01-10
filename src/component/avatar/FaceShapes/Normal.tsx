import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

function NormalShape(props: any) {
  return (
    <Svg
      width={34}
      height={55}
      viewBox="0 0 34 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={5} cy={24} r={5} fill="#F0BD70" />
      <Path
        d="M5 28h17v24.87S18.357 55 13.5 55 5 51.523 5 51.523V28z"
        fill="#F0BD70"
      />
      <Path
        d="M21.811 40.112c0 5.385-.87 4.875-6.533 4.875s-8.276-4.365-8.276-9.75C7.002 29.853 6.787 25 11.357 25c12.923.476 10.454 9.727 10.454 15.112z"
        fill="#E9B05B"
      />
      <Path
        d="M32.887 23.1c0 8.922-1.385 19.893-12.385 19.893S4.43 32.022 4.43 23.1C2.002 12.5 2.502 0 19.002 0s13.885 14.177 13.885 23.1z"
        fill="#FFCB7E"
      />
      <Rect x={23} y={28} width={3} height={2} rx={1} fill="#F0BD70" />
    </Svg>
  )
}

export default NormalShape