import { Button, ButtonProps } from "antd";
import UpdateIcon from "assets/images/icons/UpdateIcon";

const EditBtn = ({
  onClick,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type="primary"
      className={
        "flex items-center gap-[5px] font-semibold text-[16px] bg-[#4D4D4D] text-white !rounded-[12px] !h-[40px] hover:!bg-[#3e3737]" +
        className
      }
      {...props}
    >
      <UpdateIcon color="#fff" />
      <span>{children || "O'zgartirish"}</span>
    </Button>
  );
};

export default EditBtn;
