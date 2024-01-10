import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StylishHair(props: any) {
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
        d="M20.673 28.222v6.018c0 .762-.673 1.761-1.173 2.261-.5.5-2 1.5-2.85 1.5-.848 0-3.539-.451-4.826-2.257-1.287-1.805-.893-11.322 0-13.54.892-2.218 4.183-6.888 8.85-10.452 3.38-2.582 7.665-4.717 12.871-5.345C58.485 3.397 49.218 20.987 46 25.5c-5.5-2-9.5-2.5-16.717-1.518-7.217.983-8.016 1.982-8.61 4.239z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default StylishHair
