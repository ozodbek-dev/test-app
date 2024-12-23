import { Button, ButtonProps } from "antd";
import PlusIcon from "assets/images/icons/PlusIcon";
import cn from "shared/lib/tailwind-cls.helper";

const AddBtn = ({ onClick, children, className = "", ...props }: ButtonProps) => {
	return (
		<Button
			onClick={onClick}
			size='large'
			type='primary'
			className={cn("flex items-center  font-semibold text-[16px] bg-[#1464C0] text-white !rounded-[12px] !h-[40px]",  className)}
			icon={<PlusIcon />}
			{...props}
		>
			{children || "Add"}
		</Button>
	);
};

export default AddBtn;
