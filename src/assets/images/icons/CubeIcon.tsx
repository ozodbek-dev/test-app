import { ISvgIconProps, SvgIcon } from "shared/ui/SvgIcon";

const CubeIcon = ({ fill, ...props }: ISvgIconProps): JSX.Element => {
	return (
		<SvgIcon width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M21.5531 6.63758C21.5506 6.63758 21.5483 6.63659 21.5465 6.63484C21.5447 6.63308 21.5438 6.63069 21.5438 6.62821C21.4083 6.3975 21.2142 6.20669 20.9813 6.07508L12.7313 1.43446C12.5077 1.30966 12.256 1.24414 12 1.24414C11.744 1.24414 11.4923 1.30966 11.2688 1.43446L3.01876 6.07508C2.78581 6.20669 2.59176 6.3975 2.45626 6.62821C2.45626 6.63069 2.45527 6.63308 2.45351 6.63484C2.45175 6.63659 2.44937 6.63758 2.44688 6.63758V6.65633C2.31727 6.87476 2.24924 7.12422 2.25001 7.37821V16.622C2.25048 16.8892 2.3219 17.1515 2.45696 17.3821C2.59203 17.6127 2.7859 17.8033 3.01876 17.9345L11.2688 22.5751C11.4765 22.6884 11.7074 22.7525 11.9438 22.7626H12.075C12.3054 22.7524 12.5302 22.6881 12.7313 22.5751L20.9813 17.9345C21.2141 17.8033 21.408 17.6127 21.543 17.3821C21.6781 17.1515 21.7495 16.8892 21.75 16.622V7.37821C21.7514 7.11822 21.6834 6.86257 21.5531 6.63758ZM12 2.73758L19.4719 6.93758L16.6031 8.56883L9.03751 4.39696L12 2.73758ZM12.0844 11.1376L4.53751 6.93758L7.50001 5.26883L15.075 9.44071L12.0844 11.1376ZM12.7594 20.8407L12.8344 12.4407L15.8438 10.7251V14.297C15.8438 14.4959 15.9228 14.6866 16.0634 14.8273C16.2041 14.9679 16.3948 15.047 16.5938 15.047C16.7927 15.047 16.9834 14.9679 17.1241 14.8273C17.2647 14.6866 17.3438 14.4959 17.3438 14.297V9.87196L20.25 8.22196V16.622L12.7594 20.8407Z'
				fill={fill || "#1464C0"}
			/>
		</SvgIcon>
	);
};

export default CubeIcon;
