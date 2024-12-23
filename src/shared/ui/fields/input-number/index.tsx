import { Input } from "antd";
import useHooks from "shared/hooks/useHooks";
import useInputRef from "../hooks/useInputRef";
import { TCustomInputPropsAndFieldProps } from "../fields.types";
import cn from "shared/lib/tailwind-cls.helper";

export const InputNumber = (props: TCustomInputPropsAndFieldProps) => {
	const {
		field: { value, name },
		placeholder = "",
		label,
		form: { setFieldValue, setFieldTouched, touched, errors },
		size = "large",
		className = "",
		rootClassName = "",
		type = "number",
		isDisabled = false,
		onChange = () => {},
		step = 1,
		...otherProps
	} = props;

	const {  get } = useHooks();
	const inputRef = useInputRef({ errors, name, touched });
	return (
		<div className={cn(rootClassName, "field-container")}>
			{label ? <p className='input__label'>{label}</p> : null}
			<Input
				{...otherProps}
				ref={inputRef}
				type={type}
				size={size}
				placeholder={placeholder}
				name={name}
				status={!!get(errors, name) && !!get(touched, name) ? "error" : ""}
				value={value}
				disabled={isDisabled}
				min={0}
				onKeyDown={e => {
					if (
						type === "number" &&
						(e.code === "Minus" ||
							e.code === "NumpadSubtract" ||
							e.code === "ArrowDown" ||
							e.code === "ArrowUp" ||
							e.code === "NumpadAdd" ||
							e.code === "NumpadDecimal" ||
							e.code === "Comma" ||
							e.code === "KeyE")
					) {
						e.preventDefault();
					}
				}}
				onChange={e => {
					setFieldValue(name, e.target.value);
					onChange(e);
				}}
				onBlur={() => {
					setFieldTouched(name, true);
				}}
				className={className + " input-number"}
				step={step}
			/>
			<p>
				{!!get(errors, name) && !!get(touched, name) ? (
					<small className='text-red-500'>{(get(errors, name) ? (get(errors, name) as string) : "Error")}</small>
				) : null}
			</p>
		</div>
	);
};
