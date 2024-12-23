import { ISvgIconProps, SvgIcon } from "shared/ui/SvgIcon";

export default function PdfIcon({ fill, ...props }: ISvgIconProps): JSX.Element {
	return (
		<SvgIcon scale={20} viewBox='0 0 20 20' {...props}>
			<path
				d='M16.6953 6.4297L12.3203 2.0547C12.2012 1.93862 12.0413 1.87407 11.875 1.87501H4.375C4.04348 1.87501 3.72554 2.00671 3.49112 2.24113C3.2567 2.47555 3.125 2.79349 3.125 3.12501V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V6.87501C16.8759 6.70873 16.8114 6.54876 16.6953 6.4297ZM12.6328 12.6328L10.4453 14.8203C10.3258 14.9358 10.1662 15.0004 10 15.0004C9.83382 15.0004 9.67415 14.9358 9.55469 14.8203L7.36719 12.6328C7.26752 12.5114 7.21659 12.3572 7.2243 12.2003C7.232 12.0434 7.2978 11.895 7.40888 11.7839C7.51997 11.6728 7.6684 11.607 7.82531 11.5993C7.98221 11.5916 8.13638 11.6425 8.25781 11.7422L9.375 12.8672V9.37501C9.375 9.20925 9.44085 9.05028 9.55806 8.93307C9.67527 8.81586 9.83424 8.75001 10 8.75001C10.1658 8.75001 10.3247 8.81586 10.4419 8.93307C10.5592 9.05028 10.625 9.20925 10.625 9.37501V12.8672L11.7422 11.7422C11.8636 11.6425 12.0178 11.5916 12.1747 11.5993C12.3316 11.607 12.48 11.6728 12.5911 11.7839C12.7022 11.895 12.768 12.0434 12.7757 12.2003C12.7834 12.3572 12.7325 12.5114 12.6328 12.6328ZM11.875 6.87501V3.43751L15.3125 6.87501H11.875Z'
				fill={fill || "#ffffff"}
			/>
		</SvgIcon>
	);
}
