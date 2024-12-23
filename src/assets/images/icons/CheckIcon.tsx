import { ISvgIconProps, SvgIcon } from "shared/ui/SvgIcon";

export default function CheckIcon({ fill, ...props }: ISvgIconProps): JSX.Element {
	return (
		<SvgIcon scale={20} viewBox='0 0 20 20' {...props}>
			<path
				d='M8.12412 14.9991C7.95847 14.9969 7.79964 14.9328 7.67881 14.8194L3.30381 10.4444C3.20414 10.323 3.15321 10.1688 3.16092 10.0119C3.16862 9.85502 3.23442 9.70659 3.3455 9.5955C3.45659 9.48442 3.60502 9.41862 3.76193 9.41092C3.91883 9.40321 4.073 9.45414 4.19443 9.55381L8.12412 13.4913L16.4288 5.17881C16.5502 5.07915 16.7044 5.02821 16.8613 5.03592C17.0182 5.04362 17.1667 5.10942 17.2777 5.2205C17.3888 5.33159 17.4546 5.48002 17.4623 5.63693C17.47 5.79383 17.4191 5.948 17.3194 6.06943L8.56943 14.8194C8.44861 14.9328 8.28978 14.9969 8.12412 14.9991Z'
				fill={fill || "white"}
			/>
		</SvgIcon>
	);
}
