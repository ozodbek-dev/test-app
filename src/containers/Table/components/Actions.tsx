import { Button, ConfigProvider, Popover } from "antd";
import DeleteIcon from "assets/images/icons/DeleteIcon";
import Eye from "assets/images/icons/Eye";
import More from "assets/images/icons/More";
import PlusIcon from "assets/images/icons/PlusIcon";
import Resend from "assets/images/icons/Resend";
import revesion from "assets/images/icons/revision.svg";
import UpdateIcon from "assets/images/icons/UpdateIcon";
const styles = {
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0",
  borderRadius: "12px",
};
interface IProp {
  onClick: any;
  title?: string;
  isDisabled?: boolean;
  hasMorecomponent?: any;
  isRemove?: boolean;
}
export const ViewFn = (prop: IProp) => {

  const { onClick, isDisabled = false } = prop;
  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      style={{
        backgroundColor: isDisabled ? "#F4F4F4" : "#EFFFF6",
        border: isDisabled ? "1px solid #E1E1E1" : "1px solid #63EDA2",
        color: isDisabled ? "#E1E1E1" : "#63EDA2",
        // marginRight: "8px",
        ...styles,
      }}
    >
      <Eye fill={isDisabled ? "#A6A6A6" : ""} />
    </Button>
  );
};
export const AddFn = (prop: IProp) => {
  const { onClick, isDisabled = false } = prop;
  return (
    <Popover
      rootClassName='[&_.ant-popover-inner]:bg-[#4D4D4D] [&_.ant-popover-inner-content]:text-white [&_.ant-popover-inner-content]:text-sm [&_.ant-popover-inner-content]:font-bold'
      placement='bottom'
      content={prop.title || "Add"}
    >
      <Button
        disabled={isDisabled}
        onClick={onClick}
        style={{
          backgroundColor: isDisabled ? "#E1E1E1" : "#EFFFF6",
          border: "1px solid #9AC4F4",
          ...styles,
        }}
      >
        <PlusIcon  fill='#1464C0' />
      </Button>
    </Popover>
  );
};
export const MoreFn = (props: IProp) => {
  const { onClick, hasMorecomponent, isRemove = false } = props;
  return (
    <>
      {!isRemove ? (
        <ConfigProvider
          button={{
            style: { width: 80, margin: 4 },
          }}
        >
          <Popover placement='bottomRight' content={hasMorecomponent} trigger='click'>
            <Button
              onClick={onClick}
              style={{
                backgroundColor: "#F4F4F4",
                border: "1px solid #E1E1E1",
                margin: 0,
                ...styles,
              }}
            >
              <More />
            </Button>
          </Popover>
        </ConfigProvider>
      ) : null}
    </>
  );
};
export const ResendFn = (prop: IProp) => {
  const { onClick, isDisabled = false } = prop;
  return (
    <Popover
      rootClassName='[&_.ant-popover-inner]:bg-[#4D4D4D] [&_.ant-popover-inner-content]:text-white [&_.ant-popover-inner-content]:text-sm [&_.ant-popover-inner-content]:font-bold'
      placement='bottom'
      content={"Qayta yuborish"}
    >
      <Button
        onClick={onClick}
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled ? "#E1E1E1" : "#FEF2E7",
          border: isDisabled ? "1px solid #E1E1E1" : "1px solid #FCD8B8x",
          ...styles,
        }}
      >
        {isDisabled ? (
          <span className='ml-[0px]'>
            <Resend />
          </span>
        ) : (
          <img src={revesion} alt='revesion' />
        )}
      </Button>
    </Popover>
  );
};
export const UpdateFn = (prop: IProp) => {
  const { onClick, isDisabled, title } = prop;
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className='flex gap-1 p-2   items-center'
      style={{
        backgroundColor: isDisabled ? "#E1E1E1" : "#DDEBFB",
        border: isDisabled ? "1px solid #E1E1E1" : "1px solid #9AC4F4",
        borderRadius: "12px",
      }}
    >
      <UpdateIcon isDisabled={isDisabled as boolean} color={"#4D4D4D"} />
      <span className='text-base text-[#4D4D4D]'>{title}</span>
    </button>
  );
};
export const DeleteFn = (prop: IProp) => {
  const { onClick, isDisabled, title } = prop;
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className='flex  p-2 gap-1  items-center text-red'
      style={{
        backgroundColor: isDisabled ? "#E1E1E1" : "#FCE6E8",
        border: isDisabled ? "1px solid #E1E1E1" : "1px solid #F6B5B9",
        borderRadius: "12px",
      }}
    >
      <DeleteIcon />
      <span className='text-base'>{title}</span>
    </button>
  );
};
