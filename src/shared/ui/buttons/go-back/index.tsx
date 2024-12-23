import { Button } from "antd";
import BackArrowIcon from "assets/images/icons/BackArrowIcon";
import useHooks from "shared/hooks/useHooks";
import { useNavigate } from "react-router";

export interface IBackProps {
	onClick?: () => void;
	to?: string | number;
}

const GoBackBtn = (props: IBackProps) => {
	const { query, get } = useHooks();
	const navigate = useNavigate();

	const { to, onClick = handleClick } = props;

	function handleClick(): void {
		if (get(query, "backPath")) {
			navigate(get(query, "backPath", -1) as string);
			return;
		}
		if (!to) {
			navigate(-1);
		} else navigate(to as string);
	}
	return (
		<Button
			onClick={onClick}
			type='primary'
			className='flex items-center bg-[#DDEBFB] hover:!bg-[#DDddFb] !text-[#1464C0] !rounded-[12px] h-[40px]'
			icon={<BackArrowIcon />}
		>
			Back
		</Button>
	);
};

export default GoBackBtn;
