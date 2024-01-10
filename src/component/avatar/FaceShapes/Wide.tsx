import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

function WideShape(props: any) {
  return (
    <Svg
      width={34}
      height={51}
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
        d="M22 40.868c0 5.654-.882 5.118-6.617 5.118S7.002 41.403 7.002 35.75 6.784 25 11.412 25C24.5 25.5 22 35.214 22 40.868z"
        fill="#E9B05B"
      />
      <Path
        d="M32.887 23.1c0 8.922 3.686 19.893-12.385 19.893C4.43 42.993 4.43 32.022 4.43 23.1 2.002 12.5 2.502 0 19.002 0s13.885 14.177 13.885 23.1z"
        fill="#FFCB7E"
      />
      <Rect x={23} y={28} width={3} height={2} rx={1} fill="#F0BD70" />
    </Svg>
  )
}

export default WideShape