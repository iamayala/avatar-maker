import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PencilThin(props: any) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5 43c-6.5 1.5-11 2-11 2s1 2.5 3.5 2c2-.4 6-1.333 7.5-2v-2zm.5 0c6 1 10 1.756 10 1.756s-1.119 2.183-3.5 1.744l-.32-.059C42.256 46.088 39.35 45.553 38 45v-2z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default PencilThin