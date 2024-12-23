import { DatePickerProps, InputProps, RadioChangeEvent, SelectProps } from "antd";
import { TextAreaProps } from "antd/es/input";
import { FieldProps } from "formik";
//Input picker merged props
export interface ICustomInputProps extends InputProps {
	meta: any;
	field: any;
	form: any;
	onChange?: (value: any) => any;
	label?: string;
	rootClassName?: string;
	isDisabled?: boolean;
	step?: string | number;
	errorMessage?: string;
}

//Date picker merged props
type ICustomDataPickerProps = {
	label?: string;
	rootClassName?: string;
	isDisabled?: boolean;
	errorMessage?: string;
	showTime?: any;
};

// Select type
type IAntSelect = SelectProps & {
	isClearable?: boolean;
	isMulti?: boolean;
	isDisabled?: boolean;
	isSearchable?: boolean;
	label?: string;
	errorMessage?: string | any;
	rootClassName?: string;
};

// TextArea Props
export interface ITextAreaProps extends TextAreaProps {
	label?: string;
	rootClassName?: string;
}
// Async select
export interface IAsyncSelectProps {
	placeholder?: string;
	errorMessage?: string | any;
	rootClassName?: string;
	loadOptionsUrl: string;
	className?: string;
	loadOptionsParams?: (searchQuery: string) => any;
	optionLabel?: any;
	disableOptions?: any;
	optionValue?: any;
	filterParams?: any;
	loadOptionsKey?: any;
	onChange?: (value: any) => any;
	extraOptions?: any;
	isSearchable?: boolean;
	isClearable?: boolean;
	isDisabled?: boolean;
	isMulti?: boolean;
	message?: string;
	menuPlacement?: string;
	label?: string;
}

// Input mask props
export interface IInputMaskProps {
	name: string;
	label?: string;
	className?: string;
	mask?: string;
	antdProps?: any;
	placeholder?: string;
	errorMessage?: string;
	rootClassName?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// File upload props
interface IFileUploadProps {
	placeholder?: string;
	name: string;
	label?: string;
	className?: string;
	rootClassName?: string;
	type?: "number" | "text";
	oldUploadedFilesList?: { name: string; type: string; id: number }[];
	oldUploadedFilesName?: string;
	maxUploadCount: number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//radi group props
export type TRadio = {
	value: string | number | boolean;
	label: string;
	key: string | number;
};
export interface IRadioGroupProps {
	name: string;
	label?: string;
	className?: string;
	rootClassName?: string;
	size?: "large" | "small";
	defaultValue?: string | number | boolean
	isDisabled?: boolean
	onChange?: (e: RadioChangeEvent) => void;
	radios: TRadio[];
}
export type TCustomReactSelectAndFieldProps = IAntSelect & FieldProps;
export type TCustomDataPickerPropsAndFieldProps = ICustomDataPickerProps & DatePickerProps & FieldProps;
export type TCustomInputPropsAndFieldProps = ICustomInputProps & FieldProps;
export type TCustomTextAreaPropsAndFieldProps = ITextAreaProps & FieldProps;
export type TCustomInputMaskProps = IInputMaskProps & FieldProps;
export type TCustomFileUploadPropsAndFieldProps = IFileUploadProps & FieldProps;
export type TCustomRadioGroupProps = IRadioGroupProps & FieldProps;
