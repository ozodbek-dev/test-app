import { ISvgIconProps, SvgIcon } from "shared/ui/SvgIcon";

export default function EyeIcon({ fill, ...props }: ISvgIconProps): JSX.Element {
	return (
		<SvgIcon scale={20} viewBox='0 0 20 20' {...props}>
			<path
				d='M19.3202 9.75C19.2968 9.6875 18.6327 8.21875 17.164 6.74219C15.203 4.78906 12.7265 3.75 9.99992 3.75C7.27336 3.75 4.7968 4.78906 2.83586 6.74219C1.36711 8.21875 0.703046 9.6875 0.679609 9.75C0.644728 9.82873 0.626709 9.91389 0.626709 10C0.626709 10.0861 0.644728 10.1713 0.679609 10.25C0.703046 10.3125 1.36711 11.7812 2.83586 13.2578C4.7968 15.2109 7.27336 16.25 9.99992 16.25C12.7265 16.25 15.203 15.2109 17.164 13.2578C18.6327 11.7812 19.2968 10.3125 19.3202 10.25C19.3551 10.1713 19.3731 10.0861 19.3731 10C19.3731 9.91389 19.3551 9.82873 19.3202 9.75ZM9.99992 7.1875C10.5562 7.1875 11.1 7.35245 11.5625 7.66149C12.025 7.97053 12.3855 8.40979 12.5983 8.9237C12.8112 9.43762 12.8669 10.0031 12.7584 10.5487C12.6499 11.0943 12.382 11.5954 11.9887 11.9887C11.5953 12.3821 11.0942 12.6499 10.5486 12.7585C10.003 12.867 9.43754 12.8113 8.92362 12.5984C8.40971 12.3855 7.97045 12.0251 7.66141 11.5625C7.35237 11.1 7.18742 10.5563 7.18742 10C7.18742 9.25408 7.48374 8.53871 8.01118 8.01126C8.53863 7.48382 9.254 7.1875 9.99992 7.1875Z'
				fill={fill || "#0EC562"}
			/>
		</SvgIcon>
	);
}
