import { Input } from "antd";
import { TCustomInputPropsAndFieldProps } from "../fields.types";
import cn from "shared/lib/tailwind-cls.helper";
import useInputRef from "../hooks/useInputRef";

export const Password = (props: TCustomInputPropsAndFieldProps) => {
	const {
		field: { value, name },
		placeholder = "Basic Input",
		label,
		form: { setFieldValue, setFieldTouched, touched, errors },
		size = "large",
		className = "",
		rootClassName = "",
		...otherProps
	} = props;

	const ref = useInputRef({ errors, name, touched });

	return (
		<div className={cn(rootClassName, "field-container")}>
			{label ? <p className='input__label'>{label}</p> : null}
			<Input.Password
				{...otherProps}
				ref={ref}
				size={size}
				placeholder={placeholder}
				name={name}
				status={touched[name] && errors[name] ? "error" : ""}
				value={value}
				onChange={e => {
					setFieldValue(name, e.target.value);
				}}
				onBlur={() => {
					setFieldTouched(name, true);
				}}
				className={cn(className, "input-password")}
			/>
			<p>{errors[name] && touched[name] && <small className='text-red-500'>{(errors[name] ?? "Error").toString()}</small>}</p>
		</div>
	);
};
