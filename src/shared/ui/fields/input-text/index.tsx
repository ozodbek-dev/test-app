import { Input, InputRef } from "antd";
import useHooks from "shared/hooks/useHooks";
import { TCustomInputPropsAndFieldProps } from "../fields.types";
import cn from "shared/lib/tailwind-cls.helper";
import useInputRef from "../hooks/useInputRef";

export const InputText = (props: TCustomInputPropsAndFieldProps) => {
	const {
		field: { value, name },
		placeholder = "",
		label,
		form: { setFieldValue, setFieldTouched, touched, errors },
		size = "large",
		className = "",
		rootClassName = "",
		type = "text",
		isDisabled = false,
		onChange = () => {},
		...otherProps
	} = props;

	const {  get } = useHooks();
	const inputRef = useInputRef<InputRef>({ errors, name, touched });

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
				data-field-error={!!get(touched, name) && !!get(errors, name)}
				status={!!get(touched, name) && !!get(errors, name) ? "error" : ""}
				value={value}
				disabled={isDisabled}
				onChange={e => {
					setFieldValue(name, e.target.value);
					onChange(e);
				}}
				onBlur={() => {
					setFieldTouched(name, true);
				}}
				className={className + " input-text"}
			/>
			<p>
				{get(errors, name) && get(touched, name) ? (
					<small className='text-red-500'>{(get(errors, name) ?? "Error").toString()}</small>
				) : null}
			</p>
		</div>
	);
};
