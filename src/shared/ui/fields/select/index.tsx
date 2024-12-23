import { Select } from "antd";
import { TCustomReactSelectAndFieldProps } from "../input.types";
import useInputRef from "../hooks/useInputRef";
import useHooks from "shared/hooks/useHooks";
import cn from "shared/lib/tailwind-cls.helper";

export const AntSelect = (props: TCustomReactSelectAndFieldProps) => {
	const {
		options,
		isClearable,
		isMulti = false,
		isDisabled,
		label,
		isSearchable,
		field: { name, value },
		placeholder = "Tanlang",
		rootClassName,
		onChange = () => {},
		form: { setFieldValue, setFieldTouched, errors, touched },
	} = props;
	const { get } = useHooks();
	const ref = useInputRef<any>({ errors, name, touched });
	return (
		<div className={rootClassName + " field-container"}>
			{label && <p className='input__label'>{label}</p>}
			<Select
				ref={ref}
				className={cn(
					"field-select w-full font-medium [&_.ant-select-selector]:!rounded-[4px][&_.ant-select-selector]:!border-[#E9E9E9] [&_.ant-select-selector]:!pl-[16px] [&_.ant-select-selection-placeholder]:font-normal [&_.ant-select-selection-placeholder]:text-[15px] [&_.ant-select-selection-placeholder]:leading-[20px][&_.ant-select-selection-placeholder]:text-[#888888]",
					get(errors, name) && get(touched, name) ? "is-error-field":""
				)}
				key={name}
				size='large'
				disabled={isDisabled}
				{...(isMulti ? { mode: "multiple" } : "")}
				status={touched[name] && errors[name] ? "error" : ""}
				value={value}
				allowClear={isClearable}
				showSearch={isSearchable}
				filterOption={(input, option) => ((get(option, "label", "") as string) ?? "").toLowerCase().includes(input.toLowerCase())}
				onBlur={() => {
					if (!value) {
						setFieldTouched(name, true);
					}
				}}
				placeholder={placeholder}
				onChange={(value, data) => {
					setFieldValue(name, data);
					onChange(value, data);
				}}
				options={options}
			/>
				<p>{!!get(errors, name) && !!get(touched, name) ? <small className='text-red-500'>{get(errors, name)?.toString() ?? "Error"}</small> : null}</p>
		</div>
	);
};
