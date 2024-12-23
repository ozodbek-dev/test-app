import { Input } from "antd";
import { useState } from "react";
import InputMask from "react-input-mask";
import { TCustomInputMaskProps } from "../input.types";
import useHooks from "shared/hooks/useHooks";

const InputMaskComponent = (props: TCustomInputMaskProps) => {
	const {
		field: { value, name },
		className = "",
		mask = "+999 (99) 999-99-99",
		label = "",
		form: { setFieldValue, setFieldTouched, errors, touched },
		onChange = () => {},
		onBlur = () => {},
		errorMessage = "",
		rootClassName = "",
	} = props;
	const [isError, setIsError] = useState(false);
	const { get } = useHooks();

	return (
		<div className={rootClassName + " field-container"}>
			{label ? <p className='input__label'>{label}</p> : null}
			<InputMask
				formatChars={{
					"9": "[0-9]",
					A: "[A-Z]",
				}}
				size='large'
				mask={mask}
				placeholder='Mask'
				status={get(errors, name) && get(touched, name) && (get(errors, name) || isError) ? "error" : ""}
				onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
					if (e.target.value.replace(/_|_/g, "").length < mask.length) {
						setIsError(true);
					} else {
						setIsError(false);
					}
					setFieldTouched(name, true);
					onBlur(e);
				}}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					onChange(e);
					setFieldValue(name, e.target.value, true);
				}}
			>
				{(inputProps: any) => <Input className={`${className} block`} {...inputProps} />}
			</InputMask>
			{((!!get(touched, name) && !!get(errors, name)) || isError) && (
				<p>{errorMessage ? errorMessage : <span>{get(errors, name,'') as string}</span>}</p>
			)}
		</div>
	);
};

export default InputMaskComponent;
