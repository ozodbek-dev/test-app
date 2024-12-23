import { Button, ButtonProps } from "antd";
import DeleteIcon from "assets/images/icons/DeleteIcon";

const DeleteBtn = ({
  onClick,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
		<Button
			onClick={onClick}
			type='primary'
			className={
				"flex items-center gap-[5px] font-semibold text-[16px] bg-[#E63943] !text-white !rounded-[12px] !h-[40px] hover:!bg-[#ac2229]" +
				className
			}
			{...props}
		>
			<DeleteIcon fill='#fff' />
			<span>{children || "O'chirish"}</span>
		</Button>
	);
};

export default DeleteBtn;
