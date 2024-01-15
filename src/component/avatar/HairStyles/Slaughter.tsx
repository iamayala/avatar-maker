import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SlaughterHair(props: any) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 25c0 .53-.103 1.037-.29 1.5A4 4 0 0120 32a4 4 0 01-8 0c0-1.046.065-2.782.368-4.321a4 4 0 014.801-5.505A4 4 0 0124 25zM45.849 33.895a4.002 4.002 0 002.785-5.393 4 4 0 00-3.134-5.459c.593 3.14.482 6.61.382 9.774l-.033 1.078z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default SlaughterHair
