import { InputProps, RadioChangeEvent, SelectProps } from "antd";
import { TextAreaProps } from "antd/es/input";
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
export type ICustomDataPickerProps = {
	label?: string;
	rootClassName?: string;
	isDisabled?: boolean;
	errorMessage?: string;
	showTime?: any;
};

// Select type
export type IAntSelect = SelectProps & {
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
export interface IFileUploadProps {
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
	defaultValue?: string | number | boolean;
	isDisabled?: boolean;
	onChange?: (e: RadioChangeEvent) => void;
	radios: TRadio[];
}
