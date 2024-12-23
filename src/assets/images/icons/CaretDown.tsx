import { ISvgIconProps, SvgIcon } from "shared/ui/SvgIcon";

export default function Icon({ fill, ...props }: ISvgIconProps): JSX.Element {
	return (
		<SvgIcon scale={20} viewBox='0 0 20 20' {...props}>
			<g id='Icons/CaretDown'>
				<path
					id='Vector'
					d='M16.8281 7.25782C16.7803 7.14406 16.6998 7.04701 16.597 6.97889C16.4941 6.91076 16.3733 6.87462 16.2499 6.875H3.74994C3.62655 6.87462 3.5058 6.91076 3.40292 6.97889C3.30004 7.04701 3.21963 7.14406 3.17181 7.25782C3.12679 7.37326 3.11536 7.49909 3.13887 7.62076C3.16237 7.74242 3.21984 7.85495 3.30463 7.94532L9.55463 14.1953C9.67409 14.3108 9.83376 14.3754 9.99994 14.3754C10.1661 14.3754 10.3258 14.3108 10.4453 14.1953L16.6953 7.94532C16.78 7.85495 16.8375 7.74242 16.861 7.62076C16.8845 7.49909 16.8731 7.37326 16.8281 7.25782Z'
					fill={fill || "#111111"}
				/>
			</g>
		</SvgIcon>
	);
}
