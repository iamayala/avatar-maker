import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Horshoe(props: any) {
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
        d="M27 46a3 3 0 013-3h11a3 3 0 013 3v11a4 4 0 01-4-4v-7h-9v7a4 4 0 01-4 4V46z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default Horshoe
