import { Skeleton } from "antd";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
interface IProp {
  title?: ReactNode;
  data?: { title: string; value: unknown; key?: unknown; className?: string }[];
  count?: number;
  className?: string;
  id?: string;
  isBadge?: boolean;
  isLoading?: boolean;
}

const SimpleTable = (props: IProp) => {
  const {
    title,
    data,
    count,
    className,
    id,
    isBadge = true,
    isLoading = false,
  } = props;
  return (
    <div key={id} className={`${className}  w-[100%]`}>
      {title && (
        <h1 className="text-[14px] flex items-center rounded-t-[4px] leading-[20px] border-x-[1px] border-t-[1px] px-[16px] border-[#E9E9E9] py-[10px] font-bold text-[#111111] bg-[#F4F4F4]">
          {isBadge && (
            <p className="text-[14px] font-extrabold leading-[20px] text-[#FFF] bg-[#1876E2] rounded-[20px] w-[24px] h-[24px] flex items-center justify-center not-italic mr-[6px] ">
              {count}
            </p>
          )}
          {title}
        </h1>
      )}
      {data?.length
        ? data?.map((elem) => (
            <div
              key={uuidv4()}
              className={`flex simple-table ${elem?.className}`}
            >
              <div
                key={`${elem.title}${elem.value}`}
                className={` ${title &&
                  "!rounded-t-[0px]"} font-normal text-[15px] leading-[20px] text-[#2F2F2F] border-l-[1px] border-t-[1px] border-[#E9E9E9] px-[16px] py-[14px] w-1/2 left-side bg-[#FBFBFB] `}
              >
                {elem.title}
              </div>
              <div
                className={` ${title &&
                  "!rounded-t-[0px]"}  flex items-center font-normal bg-white text-[15px] leading-[20px] text-[#2F2F2F] border-x-[1px] border-t-[1px]  px-[16px] py-[14px] w-1/2 right-side`}
              >
                {!isLoading ? (
                  (elem.value as string)
                ) : (
                  <Skeleton.Input
                    active={true}
                    size={"small"}
                    className="!w-[100%]"
                  />
                )}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default SimpleTable;
