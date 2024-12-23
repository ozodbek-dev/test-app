import Title, { TitleProps } from "antd/es/typography/Title";
import { ReactNode } from "react";
import cn from "shared/lib/tailwind-cls.helper";

interface IProps extends TitleProps {
	children: ReactNode;
	className?: string;
}

function PageTitle({children,className, ...props}: IProps): JSX.Element {
  return <Title level={2} {...props} className={cn(className, )} >{children}</Title>;
}

export default PageTitle;
