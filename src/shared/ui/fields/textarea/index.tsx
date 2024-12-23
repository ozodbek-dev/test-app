import { Input } from "antd";
import { TCustomTextAreaPropsAndFieldProps } from "../input.types";
import useInputRef from "../hooks/useInputRef";
import useHooks from "shared/hooks/useHooks";

const { TextArea } = Input;

export const AntTextArea = (props: TCustomTextAreaPropsAndFieldProps) => {
	const {
		field: { value, name },
		placeholder = "",
		label,
		form: { setFieldValue, setFieldTouched, touched, errors },
		size = "large",
		className = "",
		rootClassName = "",
		rows = 3,
		cols,
		onChange = () => {},
	} = props;
	const { get } = useHooks();

	const textArearef = useInputRef<any>({ errors, name, touched });

	return (
		<div className={rootClassName + " field-container"}>
			{label ? <p className='input__label'>{label}</p> : null}
			<TextArea
				ref={textArearef}
				size={size}
				rows={rows}
				cols={cols}
				placeholder={placeholder}
				name={name}
				status={!!get(touched, name) && !!get(errors, name) ? "error" : ""}
				value={value}
				onChange={e => {
					setFieldValue(name, e.target.value);
					onChange(e);
				}}
				onBlur={() => {
					setFieldTouched(name, true);
				}}
				className={className + " input-text"}
			/>
			<p>{!!get(touched, name) && !!get(errors, name) ? <span>{get(errors, name)?.toString() ?? "Error"}</span> : null}</p>
		</div>
	);
};
export default AntTextArea;
