import cn from "shared/lib/tailwind-cls.helper";

interface IProps {
	children: React.ReactNode;
	className?: string;
	rootClassName?: string;
}

function FixedBox({ children, className = "", rootClassName = "" }: IProps) {
	return (
		<div
			className={cn(
				className
					? className
					: "fixed bottom-0 right-0  h-[56px] flex items-center justify-center bg-[#fff] transition-all  " + rootClassName,
				"z-20"
			)}
		>
			{children}
		</div>
	);
}

export default FixedBox;
