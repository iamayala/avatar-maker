import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

type Props = {
	width?: number;
	height?: number;
};

function GolfBody({ width = 64, height = 64 }: Props) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 64 64"
			fill="none"
			// @ts-ignore
			xmlns="http://www.w3.org/2000/svg"
		>
			<G clipPath="url(#clip0_606_491)">
				<G clipPath="url(#clip1_606_491)">
					<Rect x={7} y={60} width={40} height={23} rx={9} fill="#FF4DD8" />
					<Path d="M17 58h19v3s-5 1-9.5 1-9.5-1-9.5-1v-3z" fill="#FF4DD8" />
					<Path d="M17 58h19v2s-3 1.5-9.5 1.5S17 60 17 60v-2z" fill="#D2499B" />
					<Path
						d="M16.5 59a2 2 0 012-2h16a2 2 0 012 2s-5 1-10 1-10-1-10-1z"
						fill="#FF4DD8"
					/>
				</G>
			</G>
			<Path
				stroke="#7B61FF"
				strokeWidth={0.5}
				d="M0.25 0.25H63.75V63.75H0.25z"
			/>
			<Defs>
				<ClipPath id="clip0_606_491">
					<Path fill="#fff" d="M0 0H64V64H0z" />
				</ClipPath>
				<ClipPath id="clip1_606_491">
					<Path fill="#fff" d="M0 0H64V64H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default GolfBody;
