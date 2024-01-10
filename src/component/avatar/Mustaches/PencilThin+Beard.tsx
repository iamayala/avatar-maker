import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PencilThinBeard(props: any) {
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
        d="M26.5 45s4.5-.5 11-2v2c-1.5.667-5.5 1.6-7.5 2-2.5.5-3.5-2-3.5-2zM48 44.756S44 44 38 43v2c1.429.585 4.595 1.149 6.5 1.5 2.381.439 3.5-1.744 3.5-1.744zM33.31 55.242A1 1 0 0134.28 54h3.44a1 1 0 01.97 1.242l-.25 1a1 1 0 01-.97.758h-2.94a1 1 0 01-.97-.758l-.25-1z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default PencilThinBeard
