import { SVGProps } from "react";

export interface ISvgIconProps extends SVGProps<SVGSVGElement> {
	size?: number;
}
export const SvgIcon = ({ size, viewBox, width = 24, height = 24, children, ...props }: ISvgIconProps) => {
	return (
		<svg
			width={size || width}
			height={size || height}
			viewBox={viewBox || `0 0 ${width} ${height}` || `0 0 ${size} ${size}` || "0 0 24 24"}
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			{children}
		</svg>
	);
};
