import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import useHooks from "shared/hooks/useHooks";
import { TCustomDataPickerPropsAndFieldProps } from "../input.types";
import cn from "shared/lib/tailwind-cls.helper";
import useInputRef from "../hooks/useInputRef";
import "./index.scss";
export const CustomDatePicker = (props: TCustomDataPickerPropsAndFieldProps) => {
	const {
		field: { name, value },
		form: { setFieldValue, setFieldTouched, errors, touched },
		rootClassName = "",
		format = "DD.MM.YYYY",
		size = "large",
		label,
		placeholder = "",
		onChange = () => {},
		isDisabled = false,
		picker = "date",
		showTime,
	} = props;

	const {  get } = useHooks();
	const ref = useInputRef<any>({ errors, name, touched });

	return (
		<div className={cn(rootClassName, "field-container")}>
			{label ? <p className='input__label'>{label}</p> : null}
			<DatePicker
				format={format}
				showTime={showTime}
				ref={ref}
				size={size}
				picker={picker}
				name={name}
				className={cn("w-[100%] date-picker !text-[black] ", isDisabled ? "disabled" : "")}
				placeholder={placeholder}
				value={value ? dayjs(value, showTime ? (format as string) : (format as string)) : dayjs(new Date())}
				status={!!touched && !!name && !!get(errors, name) && !!get(touched, name) ? "error" : ""}
				onChange={(date: dayjs.Dayjs | null, dateString) => {
					console.log(dayjs(dateString as string, format as string).format(showTime ? (format as string) : (format as string)));

					if (date !== null)
						setFieldValue(name, dayjs(dateString as string , format as string).format(showTime ? (format as string) : (format as string)));
					else setFieldValue(name, "");
					onChange(
						date  as Dayjs,
						dayjs(date)
							.unix()
							?.toString()
					);
				}}
				onBlur={() => {
					setFieldTouched(name, true);
				}}
				disabled={isDisabled}
			/>

			<p>
				{get(errors, name) && get(touched, name) ? (
					<small className='text-red-500'>{get(errors, name)?.toString() ?? "Error"}</small>
				) : null}
			</p>
		</div>
	);
};
