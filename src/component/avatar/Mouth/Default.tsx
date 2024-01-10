import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DefaultMouth(props: any) {
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
        d="M27.93 46a1 1 0 011-1h9.142a1 1 0 011 1 5 5 0 01-5 5H32.93a5 5 0 01-5-5z"
        fill="#66253C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.756 50.708a4.992 4.992 0 01-1.684.29H32.93a5 5 0 01-4.996-4.8c.764-.285 1.898-.253 3.017-.22.356.01.71.02 1.05.02 2.21 0 4 1.568 4 3.5 0 .426-.087.833-.245 1.21z"
        fill="#B03E67"
      />
      <Path d="M29 45h10v1a1 1 0 01-1 1h-8a1 1 0 01-1-1v-1z" fill="#fff" />
    </Svg>
  )
}

export default DefaultMouth
