import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ElvisHair(props: any) {
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
      <Path
        d="M21.998 28c-.629 3 1 6.982 1 7.744 0 .762-3.93 3.025-5 3.757-1.069.731-1.5-7-1.5-7-3 0-3.5 5.5-3.5 5.5s-2.244-.74-3-4.5c-.51-2.54.299-8.089.5-9.5.5-3.5 1-11.5 7.5-15.5s23-4 27-3c9.894 2.473 11.218 15.986 8 20.5-5 5.5-19-1-23.5-1s-6.87 0-7.5 3z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default ElvisHair
