import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Classic02Hair(props: any) {
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
        d="M28.118 27.466c7.796 1.142 21.48 3.147 22.882-9.464 1-9-12.5-19.5-27-10-9.11 1.35-11.389 8.278-11.908 14.254A3.986 3.986 0 0011 25.002c0 .53.103 1.037.29 1.5-.187.463-.29.97-.29 1.5 0 1.106.449 2.106 1.174 2.83A4 4 0 1020 32.002a4 4 0 003.874-4.999l.126-.001c.952 0 2.39.21 4.118.464z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default Classic02Hair
