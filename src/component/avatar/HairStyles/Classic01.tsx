import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Classic01Hair(props: any) {
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
        d="M28.967 26.203c5.61 1.863 13.389 4.445 21.535-3.701 4-4-14-21-28.5-11.5-11.333 1.679-10.686 8.47-10.186 13.71.096 1.002.186 1.948.186 2.79 0 .533.07.931.2 1.218-.16 1.233-.2 2.467-.2 3.282a4 4 0 108 0A4 4 0 0023.875 27l.127.002c1.224 0 2.319-.55 3.053-1.416.604.183 1.243.395 1.912.617z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default Classic01Hair
