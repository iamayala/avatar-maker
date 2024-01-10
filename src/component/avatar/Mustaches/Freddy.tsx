import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FreddyMustaches(props: any) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M28 46a3 3 0 013-3h9a3 3 0 013 3H28z" fill="#1B0B47" />
    </Svg>
  )
}

export default FreddyMustaches
