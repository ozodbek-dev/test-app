import { ISvgIconProps, SvgIcon } from "shared/ui/SvgIcon";

const CirlceIcon = (props: ISvgIconProps): JSX.Element => {
	return (
		<SvgIcon width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='10' cy='10' r='6.25' fill='#DDEBFB' stroke='#1464C0' strokeWidth='1.5' />
		</SvgIcon>
	);
};

export default CirlceIcon;
