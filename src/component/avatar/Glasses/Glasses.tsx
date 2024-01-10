import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

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
      <Circle
        cx={30.2689}
        cy={36.2689}
        r={4.26891}
        stroke="#000"
        strokeWidth={2}
      />
      <Circle
        cx={44.2689}
        cy={36.2689}
        r={4.26891}
        stroke="#000"
        strokeWidth={2}
      />
      <Path stroke="#000" strokeWidth={2} d="M33.9852 35.1056L40.9852 35.002" />
    </Svg>
  )
}

export default Glasses
