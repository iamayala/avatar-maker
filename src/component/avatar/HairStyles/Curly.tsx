import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CurlyHair(props: any) {
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
        d="M45.967 32.483a3.999 3.999 0 001.78-4.884 4 4 0 00-2.966-7.41c1.418 3.674 1.314 8.218 1.186 12.294z"
        fill="#1B0B47"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.297 22.76A4.981 4.981 0 0133 24a4.978 4.978 0 01-3.057-1.043A6.978 6.978 0 0125 25a6.999 6.999 0 01-2.045-.304 4.02 4.02 0 01-.892.731 4 4 0 01-1.351 6.189A1.5 1.5 0 0119.465 34a4 4 0 01-7.291-3.17A3.987 3.987 0 0111 28c0-1.106.449-2.107 1.174-2.83a4 4 0 01.738-3.713 7.003 7.003 0 014.098-10.17 4 4 0 015.927-3.788A6.997 6.997 0 0129 4c1.373 0 2.654.395 3.735 1.079a6.502 6.502 0 0110.78 1.954 4 4 0 013.439 4.577C48.809 12.984 50 15.112 50 17.5c0 4.142-3.582 7.5-8 7.5-2.233 0-4.252-.858-5.703-2.24z"
        fill="#1B0B47"
      />
    </Svg>
  )
}

export default CurlyHair