import CloseIcon from "assets/images/icons/CloseIcon";
import SearchIcon from "assets/images/icons/SearchIcon";
interface IProps {
	placeholder?: string;
	size?: "large" | "small";
	label?: string;
	className?: string;
	rootClassName?: string;
	type?: "text";
	onChange?: (value: string) => void;
	value?: string;
	onClear?: () => void;
}

export const InputSearch = (props: IProps) => {
	const {
		value = "",
		placeholder = "Search",
		label,
		className = "",
		rootClassName = "",
		type = "text",
		onChange = () => {},
	} = props;

	return (
		<div className={rootClassName + " field_container"}>
			{label ? <p className='input_label'>{label}</p> : null}
			<div className='flex items-center bg-white rounded px-4'>
				<input
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={e => {
						onChange(e.target.value);
					}}
					className={className + " border-0 outline-none focus:border-0 pl-0 focus:shadow-none h-10 w full"}
				/>
				{value ? (
					<span onClick={() => onChange("")} className='cursor-pointer'>
						<CloseIcon />
					</span>
				) : (
					<SearchIcon />
				)}
			</div>
		</div>
	);
};
